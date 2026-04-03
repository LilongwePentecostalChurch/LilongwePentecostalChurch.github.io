import { PlaceholderPage } from '../../components/PlaceholderPage';

export function LPCKids() {
  return (
    <PlaceholderPage
      title="LPC Kids"
      description="A safe and fun place for children to grow in faith"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Children', path: '/children' },
        { label: 'LPC Kids' },
      ]}
    />
  );
}
