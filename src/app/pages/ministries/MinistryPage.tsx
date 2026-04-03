import { useParams, Navigate } from 'react-router';
import { MinistryTemplate } from './MinistryTemplate';
import { ministriesData } from '../../data/ministriesData';

export function MinistryPage() {
  const { ministryId } = useParams<{ ministryId: string }>();
  
  const ministry = ministriesData.find(m => m.id === ministryId);
  
  if (!ministry) {
    return <Navigate to="/" replace />;
  }
  
  return <MinistryTemplate ministry={ministry} allMinistries={ministriesData} />;
}
