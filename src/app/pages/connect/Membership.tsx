import { PlaceholderPage } from '../../components/PlaceholderPage';

export function Membership() {
  return (
    <PlaceholderPage
      title="Membership"
      description="Become part of the LPC family"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Connect', path: '/connect' },
        { label: 'Membership' },
      ]}
    />
  );
}
