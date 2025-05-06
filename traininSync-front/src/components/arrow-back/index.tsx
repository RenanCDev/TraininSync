import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ArrowBack() {
  const navigate = useNavigate();

  return (
    <div>
      <ArrowLeft
        size={40}
        className="cursor-pointer absolute top-7 left-7 hover:text-darkPurple transition-colors duration-300 ease-in-out"
        onClick={() => navigate(-1)}
      />
    </div>
  );
}
