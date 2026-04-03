import { PlaceholderPage } from '../../components/PlaceholderPage';

export function StaffDirectory() {
  return (
    <PlaceholderPage
      title="Staff Directory"
      description="The full LPC staff team including administration and support"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Staff Directory' },
      ]}
    />
  );
}
