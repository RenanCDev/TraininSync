import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";''
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import { createAgenda } from "../../../api/schedule/createAgenda";
import { updateAgenda } from "../../../api/schedule/updateAgenda";
import { getAllAgenda } from "../../../api/schedule/getAgenda";
import { deleteAgenda } from "../../../api/schedule/deletAgenda";
import { ScheduleModal, ConfirmDeleteModal } from "../details-schedule/";
import { toast } from "react-toastify";
import { NavBar } from "../../../components/navbar";
import { Button } from "../../../components/button";
import "../../../styles/calendar.css";

interface Agenda {
  id: number;
  dia: string;
  hora_inicio: string;
  hora_fim: string;
  local: string;
  personal: number;
  aluno?: string;
}

export function ScheduleCalendar() {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState<Agenda[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<Agenda>>({});

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const data = await getAllAgenda();
      setSchedules(data);
    } catch (error) {
      console.error("Erro ao buscar agendas:", error);
    }
  };

  const handleSelect = (selectInfo: any) => {
    const startStr = selectInfo.startStr;
    const endStr = selectInfo.endStr;

    setCurrentEvent({
      id: undefined,
      dia: startStr.split("T")[0],
      hora_inicio: startStr.split("T")[1]?.substring(0, 5),
      hora_fim: endStr.split("T")[1]?.substring(0, 5),
      local: "",
      personal: undefined,
    });

    setIsModalOpen(true);
  };

  const handleSaveEvent = async () => {
    try {
      const { id, personal, dia, hora_inicio, hora_fim, local } = currentEvent;

      if (!personal || !dia || !hora_inicio || !hora_fim || !local) {
        toast.error("Preencha todos os campos obrigatórios.");
        return;
      }

      const payload = {
        personal: String(personal),
        dia: dia as string,
        hora_inicio: hora_inicio as string,
        hora_fim: hora_fim as string,
        local: local as string,
        disponivel: true,
      };

      if (id) {
        await updateAgenda(id, payload);
        toast.success("Horário atualizado com sucesso!");
      } else {
        await createAgenda(payload);
        toast.success("Horário cadastrado com sucesso!");
      }

      setIsModalOpen(false);
      fetchSchedules();
    } catch (error: any) {
      console.error("Erro ao salvar agenda:", error);

      const msg =
        error?.response?.data?.non_field_errors?.[0] ||
        "Erro ao salvar horário.";
      toast.error(msg);
    }
  };

  const handleDeleteEvent = async () => {
    if (!currentEvent.id) return;

    try {
      await deleteAgenda(currentEvent.id);
      toast.success("Horário excluído com sucesso!");
      setIsModalOpen(false);
      setShowConfirmDelete(false);
      fetchSchedules();
    } catch (error) {
      console.error("Erro ao excluir horário:", error);
      toast.error("Erro ao excluir horário.");
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const agenda = schedules.find((a) => a.id === Number(clickInfo.event.id));
    if (agenda) {
      setCurrentEvent(agenda);
      setIsModalOpen(true);
    }
  };

  const events = schedules.map((agenda) => ({
    id: agenda.id.toString(),
    title: agenda.local,
    start: `${agenda.dia}T${agenda.hora_inicio}`,
    end: `${agenda.dia}T${agenda.hora_fim}`,
    backgroundColor: "#6B46C1",
    borderColor: "#6B46C1",
    textColor: "#fff",
    extendedProps: agenda,
  }));

  return (
    <>
      <NavBar variant="secondary">
        <Button title="Voltar" onClick={() => navigate(-1)} />
      </NavBar>

      <div className="p-6">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable
          editable={false}
          events={events}
          select={handleSelect}
          eventClick={handleEventClick}
          locale={ptBrLocale}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="auto"
          eventDidMount={(info) => {
            info.el.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            info.el.style.padding = "4px 8px";
            info.el.style.fontWeight = "600";
          }}
        />

        <ScheduleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentEvent={currentEvent}
          setCurrentEvent={setCurrentEvent}
          onSave={handleSaveEvent}
          onDelete={() => setShowConfirmDelete(true)}
          isConfirmDeleteOpen={showConfirmDelete}
        />

        <ConfirmDeleteModal
          isOpen={showConfirmDelete}
          onCancel={() => setShowConfirmDelete(false)}
          onConfirm={handleDeleteEvent}
          message={"Tem certeza que deseja excluir esse horário ?"}
        />
      </div>
    </>
  );
}
