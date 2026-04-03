import { PlaceholderPage } from '../../components/PlaceholderPage';

export function SundaySchool() {
  return (
    <PlaceholderPage
      title="Sunday School"
      description="Building Faith From The Foundation"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Ministries', path: '/ministries' },
        { label: 'Sunday School' },
      ]}
    />
  );
}
