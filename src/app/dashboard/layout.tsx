import TopNav from '@/ui/topnav'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <TopNav/>
    <section id="page-wrapper">
        <div className="dashboard-content">
            <section>
                <div className="content-box">{children}</div>
            </section>
        </div>
    </section>
    </>
  );
}