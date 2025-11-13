import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type { ReactNode } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Layout({ children }: { children: ReactNode }) {
    const isMobile = useIsMobile()
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SidebarTrigger />
                <div className={`flex-1 ${isMobile ? "p-0" : "pl-54.5"}`}>
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}