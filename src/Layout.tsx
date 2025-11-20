import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/layouts/app-sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import SplashCursor from '@/layouts/SplashCursor'
import { Outlet } from "react-router-dom"
import FooterLayout from "@/layouts/FooterLayout"
import React from "react"


type Props = { children: React.ReactNode }

export default function Layout() {
    const isMobile = useIsMobile()
    const [open, setOpen] = React.useState(false)
    return (
        <>
            {!isMobile && <SplashCursor />}
            <SidebarProvider open={open} onOpenChange={setOpen}>
                <AppSidebar />
                <SidebarInset>
                    <SidebarTrigger />
                    <Outlet />
                    <FooterLayout />
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}