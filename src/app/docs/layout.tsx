import { DocsLayout,type DocsLayoutProps} from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';


const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    banner: <div>Hello World</div>,
  },
};

// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//     <DocsLayout tree={source.pageTree} {...baseOptions}>
//       {children}
//     </DocsLayout>
//   );
// }


export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
