import { Info, AlertTriangle, CheckCircle2, XCircle, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type CalloutType = 'info' | 'warning' | 'success' | 'error' | 'note';

const STYLES: Record<CalloutType, { icon: LucideIcon; container: string; iconClass: string; label: string }> = {
  info: {
    icon: Info,
    container: 'border-blue-500/30 bg-blue-500/10',
    iconClass: 'text-blue-600 dark:text-blue-400',
    label: 'Info',
  },
  warning: {
    icon: AlertTriangle,
    container: 'border-amber-500/30 bg-amber-500/10',
    iconClass: 'text-amber-600 dark:text-amber-400',
    label: 'Warning',
  },
  success: {
    icon: CheckCircle2,
    container: 'border-emerald-500/30 bg-emerald-500/10',
    iconClass: 'text-emerald-600 dark:text-emerald-400',
    label: 'Success',
  },
  error: {
    icon: XCircle,
    container: 'border-red-500/30 bg-red-500/10',
    iconClass: 'text-red-600 dark:text-red-400',
    label: 'Error',
  },
  note: {
    icon: Info,
    container: 'border-border bg-muted',
    iconClass: 'text-muted-foreground',
    label: 'Note',
  },
};

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const style = STYLES[type];
  const Icon = style.icon;
  return (
    <aside
      className={`my-6 border rounded-lg p-4 flex gap-3 not-prose ${style.container}`}
      role="note"
      aria-label={title ?? style.label}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${style.iconClass}`} />
      <div className="flex-1 min-w-0">
        {title && (
          <div className={`font-semibold mb-1 ${style.iconClass}`}>{title}</div>
        )}
        <div className="text-sm [&_p]:m-0 [&_p+p]:mt-2">{children}</div>
      </div>
    </aside>
  );
}
