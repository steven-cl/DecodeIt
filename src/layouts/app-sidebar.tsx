import {
    NotebookPen,
    Home,
    Cpu,
    Wrench,
    Cable,
    FileCodeCorner,
    MemoryStick,
    Boxes,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarRail
} from "@/components/ui/sidebar"

import DecodeIcon from "@/assets/DecodeIt.png"

// Menu items.
const items = [
    {
        title: "Inicio",
        url: "/",
        icon: Home,
    },
    {
        title: "Introducción",
        url: "/machine_organization_and_architecture_introduction",
        icon: NotebookPen,
    },
    {
        title: "Organizacion del CPU",
        url: "/cpu_organization",
        icon: Cpu,
    },
    {
        title: "Diseño de Conjunto de Instrucciones",
        url: "/design_of_instructions_set",
        icon: FileCodeCorner,
    },
    {
        title: "Unidad de Ejecución",
        url: "/execution_unity",
        icon: Wrench,
    },
    {
        title: "Unidad de Control",
        url: "/control_unity",
        icon: Boxes,
    },
    {
        title: "Sistema de Memoria",
        url: "/memory_system",
        icon: MemoryStick,
    },
    {
        title: "Sistema de Entrada y Salida",
        url: "/input_output_system",
        icon: Cable,
    },
]

export function AppSidebar() {

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="pb-1" style={{height: "3.5rem"}}>
                        {/* DecodeIcon es una URL (string) del PNG, se debe usar como src en <img /> */}
                        <img src={DecodeIcon} alt="Decode It" className="h-6 w-6 rounded" style={{height: "3rem", width: "4rem"}}/>
                        <span className="font-semibold" style={{fontSize: "1.5rem"}}>Decode It</span>
                    </SidebarGroupLabel>
                    <SidebarSeparator />
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    <SidebarSeparator />
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}