import { Cpu, Layers, GitBranch, Database, Activity, Zap, ChevronRight, Server, CircuitBoard, Workflow, Microchip, Binary, HardDrive } from 'lucide-react';
import InfoCard from '@/layouts/InfoCard';
import SectionContainer from '@/layouts/SectionContainer';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import AnimatedContent from '@/components/AnimatedContent';
import TextType from '@/components/TextType';
import Carousel from '@/components/Carousel';

export default function U1Intro() {
    // Carousel items with computer architecture images
    const architectureImages = [
        {
            title: 'CPU Moderna',
            description: 'El corazón de toda computadora',
            id: 1,
            icon: <Microchip className="w-8 h-8" />
        },
        {
            title: 'Arquitectura von Neumann',
            description: 'Modelo fundamental de computadoras',
            id: 2,
            icon: <CircuitBoard className="w-8 h-8" />
        },
        {
            title: 'Memoria y Almacenamiento',
            description: 'Jerarquía de memoria',
            id: 3,
            icon: <HardDrive className="w-8 h-8" />
        },
        {
            title: 'Procesamiento Binario',
            description: 'Base del cómputo digital',
            id: 4,
            icon: <Binary className="w-8 h-8" />
        },
        {
            title: 'Sistema Completo',
            description: 'Integración de componentes',
            id: 5,
            icon: <Server className="w-8 h-8" />
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-[var(--color-teal-3)]/5">
            {/* Hero Section with Dynamic Text */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[var(--color-teal-2)]/15 via-[var(--color-teal-3)]/10 to-background px-8 py-20 mb-12">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-5xl mx-auto">
                    <AnimatedContent direction="vertical" distance={50} delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] text-sm font-medium mb-6 border border-[var(--color-orange)]/20">
                            <CircuitBoard className="w-4 h-4" />
                            Unidad 1
                        </div>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ paddingBottom: '0.5rem' }}>
                            <TextType
                                text={['Introducción a la Arquitectura y Organización de Computadoras']}
                                typingSpeed={40}
                                loop={false}
                                showCursor={false}
                                className="bg-gradient-to-r from-[var(--color-dark-teal)] via-[var(--color-teal-2)] to-[var(--color-teal-3)] bg-clip-text text-transparent"
                            />
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={40} delay={0.8}>
                        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                            Descubre los fundamentos de cómo funcionan las computadoras modernas, desde sus componentes básicos hasta su evolución a través de las décadas.
                        </p>
                    </AnimatedContent>
                </div>
            </div>

            {/* Carousel Section */}
            <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                <div className="max-w-5xl mx-auto px-8 mb-16 flex justify-center">
                    <Carousel 
                        items={architectureImages}
                        baseWidth={400}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                    />
                </div>
            </AnimatedContent>

            <div className="max-w-5xl mx-auto px-8 pb-16">
                {/* Section 1.1: Arquitectura y Organización */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="arquitectura-organizacion">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-teal-2)]/15 text-[var(--color-teal-2)] border-2 border-[var(--color-teal-2)]/30">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-[var(--color-dark-teal)]">
                                1.1 Arquitectura y Organización de Computadoras
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <InfoCard title="Arquitectura" icon={<Cpu className="w-5 h-5" />}>
                                    <p className="mb-3">
                                        Se refiere a los <strong className="text-[var(--color-teal-2)]">atributos visibles para el programador</strong>, es decir, cómo se presenta la computadora desde el punto de vista del software.
                                    </p>
                                    <ul className="space-y-2 list-none">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Conjunto de instrucciones</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Tipos de datos</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Modos de direccionamiento de memoria</span>
                                        </li>
                                    </ul>
                                </InfoCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <InfoCard title="Organización" icon={<Server className="w-5 h-5" />}>
                                    <p className="mb-3">
                                        Se trata de la <strong className="text-[var(--color-teal-2)]">implementación física</strong> de la arquitectura. Define cómo se construye y opera realmente el hardware.
                                    </p>
                                    <ul className="space-y-2 list-none">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Componentes hardware específicos</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Interconexión entre componentes</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Señales de control y timing</span>
                                        </li>
                                    </ul>
                                </InfoCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.3}>
                            <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/10 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-[var(--color-teal-2)] mb-2 flex items-center gap-2">
                                            <span className="text-2xl">🎯</span> Ejemplo Simple
                                        </h4>
                                        <p className="mb-2"><strong className="text-[var(--color-dark-teal)]">Arquitectura:</strong> <em>Qué hace la computadora</em> (ejecutar un programa)</p>
                                        <p><strong className="text-[var(--color-dark-teal)]">Organización:</strong> <em>Cómo lo hace</em> (qué componentes usa y cómo se conectan)</p>
                                    </div>
                                    <Separator orientation="vertical" className="hidden md:block bg-[var(--color-teal-3)]/30" />
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-[var(--color-teal-2)] mb-2 flex items-center gap-2">
                                            <span className="text-2xl">📋</span> Enfoques
                                        </h4>
                                        <p className="mb-2"><strong className="text-[var(--color-dark-teal)]">Funcional:</strong> Se centra en las funciones (procesar, almacenar, mover datos, controlar)</p>
                                        <p><strong className="text-[var(--color-dark-teal)]">Estructural:</strong> Se centra en las partes físicas y su interconexión (CPU, memoria, E/S)</p>
                                    </div>
                                </div>
                            </InfoCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 1.2: Evolución */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="evolucion">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-orange)]/15 text-[var(--color-orange)] border-2 border-[var(--color-orange)]/30">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-[var(--color-dark-teal)]">
                                1.2 Evolución de las Computadoras
                            </h2>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <InfoCard className="mb-6 bg-gradient-to-br from-[var(--color-teal-3)]/5 to-transparent">
                                <p className="text-base mb-4">
                                    A lo largo de la historia, las computadoras han evolucionado desde máquinas mecánicas como la de Babbage hasta los modernos sistemas digitales. Esta evolución ha estado marcada por:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/20">
                                        <Zap className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0" />
                                        <span className="text-[var(--color-dark-teal)]">Reducción de tamaño</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/20">
                                        <Zap className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0" />
                                        <span className="text-[var(--color-dark-teal)]">Aumento de velocidad y capacidad</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/20">
                                        <Zap className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0" />
                                        <span className="text-[var(--color-dark-teal)]">Disminución de costos</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/20">
                                        <Zap className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0" />
                                        <span className="text-[var(--color-dark-teal)]">Mayor eficiencia energética</span>
                                    </div>
                                </div>
                            </InfoCard>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                            <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-card/30 backdrop-blur-sm p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-[var(--color-teal-2)]">Generaciones de Computadoras</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="gen1" className="border-[var(--color-teal-3)]/20">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-teal-2)]">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-orange)]/15 text-[var(--color-orange)] text-sm font-bold border border-[var(--color-orange)]/30">1</span>
                                                <span>Primera Generación: Válvulas de Vacío (1940-1955)</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="pl-11 pt-2 space-y-2 text-muted-foreground">
                                                <p>Las primeras computadoras utilizaban <strong className="text-[var(--color-teal-2)]">válvulas de vacío</strong> para procesar información. Eran máquinas enormes que ocupaban habitaciones completas.</p>
                                                <ul className="list-disc list-inside space-y-1 ml-4">
                                                    <li>Tamaño: Extremadamente grandes, ocupaban salas enteras</li>
                                                    <li>Consumo: Alto consumo energético y generaban mucho calor</li>
                                                    <li>Ejemplos: ENIAC, UNIVAC I</li>
                                                    <li>Velocidad: Miles de operaciones por segundo</li>
                                                </ul>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="gen2" className="border-[var(--color-teal-3)]/20">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-teal-2)]">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-orange)]/15 text-[var(--color-orange)] text-sm font-bold border border-[var(--color-orange)]/30">2</span>
                                                <span>Segunda Generación: Transistores (1955-1965)</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="pl-11 pt-2 space-y-2 text-muted-foreground">
                                                <p>Los <strong className="text-[var(--color-teal-2)]">transistores</strong> reemplazaron a las válvulas, permitiendo computadoras más pequeñas, rápidas y confiables.</p>
                                                <ul className="list-disc list-inside space-y-1 ml-4">
                                                    <li>Tamaño: Reducción significativa del tamaño</li>
                                                    <li>Confiabilidad: Mayor durabilidad y menos fallos</li>
                                                    <li>Ejemplos: IBM 1401, IBM 7094</li>
                                                    <li>Uso: Comenzó el uso comercial de las computadoras</li>
                                                </ul>
                                            </div>
                                        </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="gen3">
                                <AccordionTrigger className="text-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-[var(--color-teal-2)] text-sm font-bold">3</span>
                                        <span>Tercera Generación: Circuitos Integrados (1965-1980)</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="pl-11 pt-2 space-y-2 text-muted-foreground">
                                        <p>Los <strong>circuitos integrados (chips)</strong> permitieron colocar miles de transistores en un solo chip de silicio.</p>
                                        <ul className="list-disc list-inside space-y-1 ml-4">
                                            <li>Tamaño: Computadoras más compactas y accesibles</li>
                                            <li>Costo: Reducción dramática del costo</li>
                                            <li>Ejemplos: IBM System/360, DEC PDP-8</li>
                                            <li>Velocidad: Millones de operaciones por segundo</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="gen4">
                                <AccordionTrigger className="text-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-[var(--color-teal-2)] text-sm font-bold">4</span>
                                        <span>Cuarta Generación: Microprocesadores (1980-actualidad)</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="pl-11 pt-2 space-y-2 text-muted-foreground">
                                        <p>La integración de toda la CPU en un solo chip: el <strong>microprocesador</strong>. Nacimiento de las computadoras personales.</p>
                                        <ul className="list-disc list-inside space-y-1 ml-4">
                                            <li>Tamaño: Computadoras personales y portátiles</li>
                                            <li>Capacidad: Miles de millones de transistores en un chip</li>
                                            <li>Ejemplos: Intel 4004, Intel Core, AMD Ryzen, Apple Silicon</li>
                                            <li>Velocidad: Miles de millones de operaciones por segundo</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="gen5">
                                <AccordionTrigger className="text-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-[var(--color-teal-2)] text-sm font-bold">5</span>
                                        <span>Quinta Generación: IA y Computación Cuántica (en desarrollo)</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="pl-11 pt-2 space-y-2 text-muted-foreground">
                                        <p>Computadoras basadas en <strong>inteligencia artificial</strong> y <strong>computación cuántica</strong> que prometen revolucionar el procesamiento de información.</p>
                                        <ul className="list-disc list-inside space-y-1 ml-4">
                                            <li>IA: Sistemas que aprenden y se adaptan</li>
                                            <li>Cuántica: Uso de qubits para procesamiento exponencialmente más rápido</li>
                                            <li>Ejemplos: IBM Q, Google Sycamore, sistemas de deep learning</li>
                                            <li>Aplicaciones: Criptografía, simulación molecular, optimización compleja</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </AnimatedContent>
            </SectionContainer>
        </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 1.3: Máquina Secuencial */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="maquina-secuencial">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-teal-3)]/15 text-[var(--color-teal-3)] border-2 border-[var(--color-teal-3)]/30">
                                <GitBranch className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-[var(--color-dark-teal)]">
                                1.3 Máquina Secuencial de Programa Almacenado
                            </h2>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <InfoCard className="mb-6 bg-gradient-to-br from-[var(--color-teal-3)]/10 to-transparent border-[var(--color-teal-3)]/30">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center">
                                        <span className="text-2xl">💡</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-2">Concepto Fundamental</h3>
                                        <p className="text-base">
                                            Este es un concepto revolucionario en la computación moderna, propuesto por <strong className="text-[var(--color-teal-2)]">John von Neumann</strong>, que sentó las bases de cómo funcionan las computadoras actuales.
                                        </p>
                                    </div>
                        </div>
                    </InfoCard>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <InfoCard title="Programa Almacenado" icon={<Database className="w-5 h-5" />}>
                            <p className="mb-3">
                                Las instrucciones y los datos se almacenan en la <strong>misma memoria</strong>.
                            </p>
                            <div className="p-4 rounded-lg bg-muted/50 border border-border/30">
                                <p className="text-sm mb-2 font-semibold text-[var(--color-dark-teal)]">Ventajas:</p>
                                <ul className="space-y-1 text-sm">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                        <span>La computadora puede modificar sus propias instrucciones</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                        <span>Ejecuta diferentes tareas sin cambios físicos</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                        <span>Flexibilidad y programabilidad total</span>
                                    </li>
                                </ul>
                            </div>
                        </InfoCard>

                        <InfoCard title="Máquina Secuencial" icon={<Workflow className="w-5 h-5" />}>
                            <p className="mb-3">
                                La computadora ejecuta las instrucciones <strong>una tras otra</strong>, en orden.
                            </p>
                            <div className="p-4 rounded-lg bg-muted/50 border border-border/30">
                                <p className="text-sm mb-2 font-semibold text-[var(--color-dark-teal)]">Características:</p>
                                <ul className="space-y-1 text-sm">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                        <span>Controlada por una unidad de control o secuenciador</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                        <span>Ciclo: buscar → decodificar → ejecutar</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                        <span>Operación predecible y determinista</span>
                                    </li>
                                </ul>
                            </div>
                        </InfoCard>
                    </div>

                    <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6">
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-dark-teal)]">Unidades Funcionales Necesarias</h3>
                        <p className="text-muted-foreground mb-6">
                            Actualización del modelo de Babbage para computadoras modernas:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">1</div>
                                    <h4 className="font-semibold text-[var(--color-dark-teal)]">Unidad de Cálculo (ALU)</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Realiza operaciones aritméticas y lógicas</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">2</div>
                                    <h4 className="font-semibold text-[var(--color-dark-teal)]">Memoria</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Almacena programas y datos</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">3</div>
                                    <h4 className="font-semibold text-[var(--color-dark-teal)]">Unidad de Control</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Dirige el flujo de datos y ejecución</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">4</div>
                                    <h4 className="font-semibold text-[var(--color-dark-teal)]">Entrada</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Permite ingresar datos y programas</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">5</div>
                                    <h4 className="font-semibold text-[var(--color-dark-teal)]">Salida</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Muestra o envía los resultados</p>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </SectionContainer>
        </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 1.4: Organización */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="organizacion">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-teal-1)]/15 text-[var(--color-teal-1)] border-2 border-[var(--color-teal-1)]/30">
                                <CircuitBoard className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-[var(--color-dark-teal)]">
                            1.4 Organización de la Computadora
                        </h2>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8">
                        La organización de la computadora se analiza desde dos perspectivas complementarias:
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {/* Enfoque Funcional */}
                        <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-[var(--color-teal-2)]" />
                                </div>
                                <h3 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Enfoque Funcional</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Se centra en <strong>qué hace la computadora</strong>:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-[var(--color-teal-2)]">1</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--color-dark-teal)]">Procesamiento de datos</p>
                                        <p className="text-sm text-muted-foreground">Realizar cálculos y operaciones</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-[var(--color-teal-2)]">2</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--color-dark-teal)]">Almacenamiento de datos</p>
                                        <p className="text-sm text-muted-foreground">Guardar información temporal o permanente</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-[var(--color-teal-2)]">3</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--color-dark-teal)]">Traslado de datos</p>
                                        <p className="text-sm text-muted-foreground">Mover información entre componentes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-[var(--color-teal-2)]">4</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--color-dark-teal)]">Operaciones de control</p>
                                        <p className="text-sm text-muted-foreground">Gestionar y coordinar todas las actividades</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enfoque Estructural */}
                        <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Layers className="w-5 h-5 text-[var(--color-teal-2)]" />
                                </div>
                                <h3 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Enfoque Estructural</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Se centra en <strong>cómo está construida</strong>:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                    <Cpu className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-[var(--color-dark-teal)]">Procesador (CPU)</p>
                                        <p className="text-sm text-muted-foreground">El cerebro de la computadora, ejecuta instrucciones</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                    <Database className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-[var(--color-dark-teal)]">Memoria</p>
                                        <p className="text-sm text-muted-foreground">Almacena datos y programas (RAM, ROM, caché)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                                    <Server className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-[var(--color-dark-teal)]">Entrada/Salida (E/S)</p>
                                        <p className="text-sm text-muted-foreground">Permite la comunicación con el exterior</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm font-semibold text-[var(--color-dark-teal)] mb-2">📐 Esquema básico:</p>
                                <div className="font-mono text-sm text-muted-foreground text-center py-2">
                                    CPU ↔ Memoria ↔ Dispositivos de E/S
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">
                                    La CPU se comunica con la memoria y los dispositivos de E/S para ejecutar programas
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Additional Information Section */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="informacion-adicional">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-orange)]/15 text-[var(--color-orange)] border-2 border-[var(--color-orange)]/30">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h2 className="text-4xl font-bold text-[var(--color-dark-teal)]">
                                Información Adicional Importante
                            </h2>
                        </div>

                    <div className="space-y-6">
                        <InfoCard className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                            <h3 className="text-xl font-semibold text-[var(--color-dark-teal)] mb-3">🏗️ Arquitectura von Neumann vs. Harvard</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                                    <h4 className="font-semibold text-[var(--color-dark-teal)] mb-2">Von Neumann</h4>
                                    <p className="text-sm mb-2">Usa una <strong>sola memoria</strong> para instrucciones y datos.</p>
                                    <ul className="text-sm space-y-1">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                            <span>Más simple y flexible</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                            <span>Usado en PCs y servidores</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                                    <h4 className="font-semibold text-[var(--color-dark-teal)] mb-2">Harvard</h4>
                                    <p className="text-sm mb-2">Usa <strong>memorias separadas</strong> para instrucciones y datos.</p>
                                    <ul className="text-sm space-y-1">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                            <span>Más rápida y eficiente</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                            <span>Usado en microcontroladores</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <h3 className="text-xl font-semibold text-[var(--color-dark-teal)] mb-3">⚙️ Componentes clave de la CPU</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                    <h4 className="font-semibold text-[var(--color-dark-teal)] mb-2">ALU</h4>
                                    <p className="text-sm text-muted-foreground">Unidad Aritmético-Lógica que realiza cálculos</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                    <h4 className="font-semibold text-[var(--color-dark-teal)] mb-2">UC</h4>
                                    <p className="text-sm text-muted-foreground">Unidad de Control que dirige las operaciones</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                    <h4 className="font-semibold text-[var(--color-dark-teal)] mb-2">Registros</h4>
                                    <p className="text-sm text-muted-foreground">Pequeñas memorias rápidas dentro de la CPU</p>
                                </div>
                            </div>
                        </InfoCard>

                        <InfoCard className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-2">Importancia del concepto de "Programa Almacenado"</h3>
                                    <p className="text-muted-foreground">
                                        Este concepto permitió que las computadoras fueran <strong className="text-[var(--color-teal-2)]">programables</strong>, lo que las hizo versátiles y sentó las bases del software moderno. Sin esta idea revolucionaria, las computadoras seguirían siendo máquinas especializadas que solo pueden realizar una tarea específica.
                                    </p>
                                </div>
                            </div>
                        </InfoCard>
                    </div>
                </SectionContainer>
            </AnimatedContent>
            </div>
        </div>
    )
}