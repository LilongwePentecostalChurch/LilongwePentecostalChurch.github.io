import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="font-['Montserrat'] text-sm text-white/80 mb-8">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-[#E8821A] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight size={14} className="text-white/40" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
