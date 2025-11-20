import { Cpu, Layers, GitBranch, Database, Activity, Zap, ChevronRight, Server, CircuitBoard, Workflow, Microchip, Binary, HardDrive, Sparkles, Clock, Brain, Atom, BookOpen, ArrowRight } from 'lucide-react';
import InfoCard from '@/layouts/InfoCard';
import SectionContainer from '@/layouts/SectionContainer';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import AnimatedContent from '@/components/AnimatedContent';
import TextType from '@/components/TextType';
import Carousel from '@/components/Carousel';
import SplitText from '@/components/SplitText';
import BlurText from '@/components/BlurText';
import SpotlightCard from '@/components/SpotlightCard';
import Stack from '@/components/Stack';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import AnimatedList from '@/components/AnimatedList';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

    // Stack images for computer architecture
    const stackImages = [
        { id: 1, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format' },
        { id: 2, img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=500&auto=format' },
        { id: 3, img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=500&auto=format' },
        { id: 4, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-[var(--color-teal-3)]/5 to-background">
            {/* Hero Section with Dynamic Text */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/15 to-[var(--color-teal-3)]/10 px-8 py-20 mb-12">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-5xl mx-auto">
                    <AnimatedContent direction="vertical" distance={50} delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-6 border border-[var(--color-orange)]/30 shadow-lg">
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
                                className="text-black"
                            />
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={40} delay={0.8}>
                        <div className="text-center">
                            <BlurText 
                                text="Descubre los fundamentos de cómo funcionan las computadoras modernas, desde sus componentes básicos hasta su evolución a través de las décadas."
                                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                                delay={30}
                                animateBy="words"
                            />
                        </div>
                    </AnimatedContent>

                </div>
            </div>

            {/* Carousel Section */}
            <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="flex justify-center">
                        <Carousel 
                            items={architectureImages}
                            baseWidth={400}
                            autoplay={true}
                            autoplayDelay={4000}
                            pauseOnHover={true}
                            loop={true}
                        />
                    </div>
                </div>
            </AnimatedContent>

            {/* Stack Component - Layered Architecture Images */}
            <AnimatedContent direction="vertical" distance={60} delay={0.3}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="text-center mb-8">
                        <SplitText 
                            text="Capas de la Arquitectura"
                            tag="h2"
                            className="text-3xl font-bold text-[var(--color-teal)]"
                            delay={50}
                            splitType="chars"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Stack 
                            cardsData={stackImages}
                            cardDimensions={{ width: 300, height: 300 }}
                            randomRotation={true}
                            sensitivity={150}
                        />
                    </div>
                </div>
            </AnimatedContent>

            <div className="max-w-5xl mx-auto px-8 pb-16">
                {/* Section 1.1: Arquitectura y Organización */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="arquitectura-organizacion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-teal-2)]/30 shadow-lg">
                                <Layers className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="1.1 Arquitectura y Organización de Computadoras"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Arquitectura" icon={<Cpu className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Se refiere a los <strong className="text-[var(--color-teal-2)]">atributos visibles para el programador</strong>, es decir, cómo se presenta la computadora desde el punto de vista del software.
                                        </p>
                                        <ul className="space-y-2 list-none">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                                <span className="text-white">Conjunto de instrucciones</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                                <span className="text-white">Tipos de datos</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                                <span className="text-white">Modos de direccionamiento de memoria</span>
                                            </li>
                                        </ul>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Organización" icon={<Server className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Se trata de la <strong className="text-[var(--color-teal-2)]">implementación física</strong> de la arquitectura. Define cómo se construye y opera realmente el hardware.
                                        </p>
                                        <ul className="space-y-2 list-none">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                                <span className="text-white">Componentes hardware específicos</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                                <span className="text-white">Interconexión entre componentes</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                                <span className="text-white">Señales de control y timing</span>
                                            </li>
                                        </ul>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.3}>
                            <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/10 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-[var(--color-teal-2)] mb-2 flex items-center gap-2">
                                            <span className="text-2xl">🎯</span> Ejemplo Simple
                                        </h4>
                                        <p className="mb-2"><strong className="text-[var(--color-teal)]">Arquitectura:</strong> <em>Qué hace la computadora</em> (ejecutar un programa)</p>
                                        <p><strong className="text-[var(--color-teal)]">Organización:</strong> <em>Cómo lo hace</em> (qué componentes usa y cómo se conectan)</p>
                                    </div>
                                    <Separator orientation="vertical" className="hidden md:block bg-[var(--color-teal-3)]/30" />
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-[var(--color-teal-2)] mb-2 flex items-center gap-2">
                                            <span className="text-2xl">📋</span> Enfoques
                                        </h4>
                                        <p className="mb-2"><strong className="text-[var(--color-teal)]">Funcional:</strong> Se centra en las funciones (procesar, almacenar, mover datos, controlar)</p>
                                        <p><strong className="text-[var(--color-teal)]">Estructural:</strong> Se centra en las partes físicas y su interconexión (CPU, memoria, E/S)</p>
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
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Activity className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="1.2 Evolución de las Computadoras"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <p className="text-base mb-4 text-white">
                                        A lo largo de la historia, las computadoras han evolucionado desde máquinas mecánicas como la de Babbage hasta los modernos sistemas digitales. Esta evolución ha estado marcada por:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/20 to-[var(--color-orange)]/10 border border-[var(--color-orange)]/30 shadow-md">
                                            <Zap className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0" />
                                            <span className="text-white font-semibold">Reducción de tamaño</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/20 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 shadow-md">
                                            <Zap className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0" />
                                            <span className="text-white font-semibold">Aumento de velocidad y capacidad</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/20 to-[var(--color-orange)]/10 border border-[var(--color-orange)]/30 shadow-md">
                                            <Zap className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0" />
                                            <span className="text-white font-semibold">Disminución de costos</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/20 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 shadow-md">
                                            <Zap className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0" />
                                            <span className="text-white font-semibold">Mayor eficiencia energética</span>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        {/* ScrollStack - Evolution Timeline */}
                        <AnimatedContent direction="vertical" distance={40} delay={0.15}>
                            <div className="mb-12">
                                <div className="text-center mb-6">
                                    <SplitText 
                                        text="Línea de Tiempo de la Evolución"
                                        tag="h3"
                                        className="text-2xl font-semibold text-[var(--color-teal-2)]"
                                        delay={40}
                                        splitType="words"
                                    />
                                </div>
                                <div className="h-[500px] rounded-2xl border border-[var(--color-teal-3)]/30 overflow-hidden bg-gradient-to-b from-background to-[var(--color-teal-3)]/5">
                                    <ScrollStack 
                                        itemDistance={150}
                                        itemScale={0.06}
                                        itemStackDistance={5}
                                        stackPosition="10%"
                                        baseScale={0.65}
                                        className="h-full"
                                    >
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/90 to-[var(--color-orange)]/70 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Clock className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">1940-1955</h4>
                                                        <p className="text-white/90 text-lg">Primera Generación</p>
                                                    </div>
                                                </div>
                                                <div className="relative h-40 mb-3 rounded-lg overflow-hidden">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format" 
                                                        alt="ENIAC Computer"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-white text-lg font-semibold">Válvulas de Vacío</p>
                                                <p className="text-white/90">Las primeras computadoras masivas que ocupaban salas completas</p>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal-2)]/90 to-[var(--color-teal-3)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Microchip className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">1955-1965</h4>
                                                        <p className="text-white/90 text-lg">Segunda Generación</p>
                                                    </div>
                                                </div>
                                                <div className="relative h-40 mb-3 rounded-lg overflow-hidden">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format" 
                                                        alt="Transistor Technology"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-white text-lg font-semibold">Transistores</p>
                                                <p className="text-white/90">Computadoras más pequeñas, rápidas y confiables</p>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/80 to-[var(--color-teal-1)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <CircuitBoard className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">1965-1980</h4>
                                                        <p className="text-white/90 text-lg">Tercera Generación</p>
                                                    </div>
                                                </div>
                                                <div className="relative h-40 mb-3 rounded-lg overflow-hidden">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format" 
                                                        alt="Integrated Circuits"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-white text-lg font-semibold">Circuitos Integrados</p>
                                                <p className="text-white/90">Miles de transistores en un solo chip de silicio</p>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal-3)]/90 to-[var(--color-teal)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Cpu className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">1980-Actualidad</h4>
                                                        <p className="text-white/90 text-lg">Cuarta Generación</p>
                                                    </div>
                                                </div>
                                                <div className="relative h-40 mb-3 rounded-lg overflow-hidden">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format" 
                                                        alt="Modern CPUs"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-white text-lg font-semibold">Microprocesadores</p>
                                                <p className="text-white/90">CPU completa en un solo chip - Era de las PCs</p>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/95 to-[var(--color-teal-3)]/85 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Brain className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">En Desarrollo</h4>
                                                        <p className="text-white/90 text-lg">Quinta Generación</p>
                                                    </div>
                                                </div>
                                                <div className="relative h-40 mb-3 rounded-lg overflow-hidden">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format" 
                                                        alt="AI and Quantum Computing"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-white text-lg font-semibold">IA y Computación Cuántica</p>
                                                <p className="text-white/90">El futuro de la computación</p>
                                            </div>
                                        </ScrollStackItem>
                                    </ScrollStack>
                                </div>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                            <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-gradient-to-br from-card/50 to-[var(--color-teal-3)]/5 backdrop-blur-sm p-6">
                                <div className="text-center mb-6">
                                    <SplitText 
                                        text="Generaciones de Computadoras"
                                        tag="h3"
                                        className="text-2xl font-semibold text-[var(--color-teal-2)]"
                                        delay={40}
                                        splitType="words"
                                    />
                                </div>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.3)">
                                        <AccordionItem value="gen1" className="border-[var(--color-orange)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white text-lg font-bold border-2 border-[var(--color-orange)]/50 shadow-lg">1</span>
                                                    <span className="font-bold">Primera Generación: Válvulas de Vacío (1940-1955)</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <img 
                                                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format"
                                                                alt="ENIAC - Primera Generación"
                                                                className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                                                            />
                                                            <p className="text-white mb-4">
                                                                Las primeras computadoras utilizaban <strong className="text-[var(--color-orange)]">válvulas de vacío</strong> para procesar información. Eran máquinas enormes que ocupaban habitaciones completas.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-[var(--color-orange)] mb-3 flex items-center gap-2">
                                                                <Sparkles className="w-5 h-5 text-[var(--color-orange)]" />
                                                                Características principales:
                                                            </h4>
                                                            <AnimatedList 
                                                                items={[
                                                                    '🏢 Tamaño: Extremadamente grandes, ocupaban salas enteras',
                                                                    '⚡ Consumo: Alto consumo energético y generaban mucho calor',
                                                                    '💻 Ejemplos: ENIAC, UNIVAC I',
                                                                    '⚡ Velocidad: Miles de operaciones por segundo'
                                                                ]}
                                                                className="h-auto"
                                                                itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 rounded-lg p-3"
                                                                showGradients={false}
                                                                enableArrowNavigation={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>

                                    <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                        <AccordionItem value="gen2" className="border-[var(--color-teal-2)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-2)]/5 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white text-lg font-bold border-2 border-[var(--color-teal-2)]/50 shadow-lg">2</span>
                                                    <span className="font-bold">Segunda Generación: Transistores (1955-1965)</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <img 
                                                                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format"
                                                                alt="Transistor Technology"
                                                                className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                                                            />
                                                            <p className="text-white mb-4">
                                                                Los <strong className="text-[var(--color-teal-3)]">transistores</strong> reemplazaron a las válvulas, permitiendo computadoras más pequeñas, rápidas y confiables.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-[var(--color-teal-3)] mb-3 flex items-center gap-2">
                                                                <Sparkles className="w-5 h-5 text-[var(--color-teal-2)]" />
                                                                Características principales:
                                                            </h4>
                                                            <AnimatedList 
                                                                items={[
                                                                    '📏 Tamaño: Reducción significativa del tamaño',
                                                                    '✅ Confiabilidad: Mayor durabilidad y menos fallos',
                                                                    '💻 Ejemplos: IBM 1401, IBM 7094',
                                                                    '🏢 Uso: Comenzó el uso comercial de las computadoras'
                                                                ]}
                                                                className="h-auto"
                                                                itemClassName="bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 rounded-lg p-3"
                                                                showGradients={false}
                                                                enableArrowNavigation={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>

                                    <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                        <AccordionItem value="gen3" className="border-[var(--color-teal-3)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-3)]/5 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-teal-2)] text-white text-lg font-bold border-2 border-[var(--color-teal-3)]/50 shadow-lg">3</span>
                                                    <span className="font-bold">Tercera Generación: Circuitos Integrados (1965-1980)</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <img 
                                                                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600&auto=format"
                                                                alt="Integrated Circuits"
                                                                className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                                                            />
                                                            <p className="text-white mb-4">
                                                                Los <strong className="text-[var(--color-teal-3)]">circuitos integrados (chips)</strong> permitieron colocar miles de transistores en un solo chip de silicio.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-[var(--color-teal-3)] mb-3 flex items-center gap-2">
                                                                <Sparkles className="w-5 h-5 text-[var(--color-teal-3)]" />
                                                                Características principales:
                                                            </h4>
                                                            <AnimatedList 
                                                                items={[
                                                                    '📦 Tamaño: Computadoras más compactas y accesibles',
                                                                    '💰 Costo: Reducción dramática del costo',
                                                                    '💻 Ejemplos: IBM System/360, DEC PDP-8',
                                                                    '⚡ Velocidad: Millones de operaciones por segundo'
                                                                ]}
                                                                className="h-auto"
                                                                itemClassName="bg-gradient-to-r from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20 rounded-lg p-3"
                                                                showGradients={false}
                                                                enableArrowNavigation={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>

                                    <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                        <AccordionItem value="gen4" className="border-[var(--color-teal)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal)]/5 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-1)] text-white text-lg font-bold border-2 border-[var(--color-teal)]/50 shadow-lg">4</span>
                                                    <span className="font-bold">Cuarta Generación: Microprocesadores (1980-actualidad)</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <img 
                                                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format"
                                                                alt="Modern CPUs"
                                                                className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                                                            />
                                                            <p className="text-white mb-4">
                                                                La integración de toda la CPU en un solo chip: el <strong className="text-[var(--color-teal-3)]">microprocesador</strong>. Nacimiento de las computadoras personales.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-[var(--color-teal-3)] mb-3 flex items-center gap-2">
                                                                <Sparkles className="w-5 h-5 text-[var(--color-teal)]" />
                                                                Características principales:
                                                            </h4>
                                                            <AnimatedList 
                                                                items={[
                                                                    '💻 Tamaño: Computadoras personales y portátiles',
                                                                    '🔬 Capacidad: Miles de millones de transistores en un chip',
                                                                    '🖥️ Ejemplos: Intel 4004, Intel Core, AMD Ryzen, Apple Silicon',
                                                                    '🚀 Velocidad: Miles de millones de operaciones por segundo'
                                                                ]}
                                                                className="h-auto"
                                                                itemClassName="bg-gradient-to-r from-[var(--color-teal)]/10 to-transparent border border-[var(--color-teal)]/20 rounded-lg p-3"
                                                                showGradients={false}
                                                                enableArrowNavigation={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>

                                    <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.35)">
                                        <AccordionItem value="gen5" className="border-[var(--color-orange)] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-[var(--color-teal-3)]/5">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white text-lg font-bold border-2 border-[var(--color-orange)]/50 shadow-lg">5</span>
                                                    <span className="font-bold">Quinta Generación: IA y Computación Cuántica (en desarrollo)</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <img 
                                                                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format"
                                                                alt="AI and Quantum Computing"
                                                                className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                                                            />
                                                            <p className="text-white mb-4">
                                                                Computadoras basadas en <strong className="text-[var(--color-orange)]">inteligencia artificial</strong> y <strong className="text-[var(--color-teal-3)]">computación cuántica</strong> que prometen revolucionar el procesamiento de información.
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-[var(--color-orange)] mb-3 flex items-center gap-2">
                                                                <Brain className="w-5 h-5 text-[var(--color-orange)]" />
                                                                Características principales:
                                                            </h4>
                                                            <AnimatedList 
                                                                items={[
                                                                    '🤖 IA: Sistemas que aprenden y se adaptan',
                                                                    '⚛️ Cuántica: Uso de qubits para procesamiento exponencial',
                                                                    '🔬 Ejemplos: IBM Q, Google Sycamore, sistemas de deep learning',
                                                                    '🎯 Aplicaciones: Criptografía, simulación molecular, optimización'
                                                                ]}
                                                                className="h-auto"
                                                                itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-orange)]/20 rounded-lg p-3"
                                                                showGradients={false}
                                                                enableArrowNavigation={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>
                                </Accordion>
                            </div>
                        </AnimatedContent>
            </SectionContainer>
        </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 1.3: Máquina Secuencial */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="maquina-secuencial">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-3)]/30 shadow-lg">
                                <GitBranch className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="1.3 Máquina Secuencial de Programa Almacenado"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={25}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-6" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center">
                                            <span className="text-2xl">💡</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-2">Concepto Fundamental</h3>
                                            <p className="text-base text-white">
                                                Este es un concepto revolucionario en la computación moderna, propuesto por <strong className="text-[var(--color-teal-2)]">John von Neumann</strong>, que sentó las bases de cómo funcionan las computadoras actuales.
                                            </p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.15}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 124, 120, 0.3)">
                                    <InfoCard title="Programa Almacenado" icon={<Database className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Las instrucciones y los datos se almacenan en la <strong className="text-[var(--color-teal-2)]">misma memoria</strong>.
                                        </p>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-sm mb-2 font-semibold text-[var(--color-teal)]">Ventajas:</p>
                                            <ul className="space-y-1 text-sm">
                                                <li className="flex items-start gap-2 text-black">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                    <span>La computadora puede modificar sus propias instrucciones</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-black">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                    <span>Ejecuta diferentes tareas sin cambios físicos</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-black">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                    <span>Flexibilidad y programabilidad total</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Máquina Secuencial" icon={<Workflow className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            La computadora ejecuta las instrucciones <strong className="text-[var(--color-orange)]">una tras otra</strong>, en orden.
                                        </p>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-sm mb-2 font-semibold text-[var(--color-teal)]">Características:</p>
                                            <ul className="space-y-1 text-sm">
                                                <li className="flex items-start gap-2 text-black">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                    <span>Controlada por una unidad de control o secuenciador</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-black">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                    <span>Ciclo: buscar → decodificar → ejecutar</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-black">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                    <span>Operación predecible y determinista</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.25}>
                            <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-[var(--color-teal)]">Unidades Funcionales Necesarias</h3>
                                <p className="text-muted-foreground mb-6">
                                    Actualización del modelo de Babbage para computadoras modernas:
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">1</div>
                                    <h4 className="font-semibold text-[var(--color-teal)]">Unidad de Cálculo (ALU)</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Realiza operaciones aritméticas y lógicas</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">2</div>
                                    <h4 className="font-semibold text-[var(--color-teal)]">Memoria</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Almacena programas y datos</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">3</div>
                                    <h4 className="font-semibold text-[var(--color-teal)]">Unidad de Control</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Dirige el flujo de datos y ejecución</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">4</div>
                                    <h4 className="font-semibold text-[var(--color-teal)]">Entrada</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">Permite ingresar datos y programas</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[var(--color-teal-2)] font-bold">5</div>
                                    <h4 className="font-semibold text-[var(--color-teal)]">Salida</h4>
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
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-1)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-1)]/30 shadow-lg">
                        <CircuitBoard className="w-6 h-6" />
                </div>
                <BlurText 
                    text="1.4 Organización de la Computadora"
                    className="text-4xl font-bold text-[var(--color-teal)]"
                    delay={30}
                    animateBy="words"
                />
            </div>

            <div className="text-center mb-8">
                <BlurText 
                    text="La organización de la computadora se analiza desde dos perspectivas complementarias:"
                    className="text-lg text-white"
                    delay={20}
                    animateBy="words"
            />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Enfoque Funcional */}
                <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                    <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                        <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-gradient-to-br from-card/50 to-[var(--color-teal-3)]/5 backdrop-blur-sm p-6 h-full text-white">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-black">Enfoque Funcional</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-4 text-white">
                                        Se centra en <strong className="text-[var(--color-teal-3)]">qué hace la computadora</strong>:
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-white">1</span>
                                            </div>
                                            <div className="text-white">
                                                <p className="font-semibold">Procesamiento de datos</p>
                                                <p className="text-sm">Realizar cálculos y operaciones</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-white">2</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Almacenamiento de datos</p>
                                                <p className="text-sm ">Guardar información temporal o permanente</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-white">3</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Traslado de datos</p>
                                                <p className="text-sm ">Mover información entre componentes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-white">4</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Operaciones de control</p>
                                                <p className="text-sm ">Gestionar y coordinar todas las actividades</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </AnimatedContent>

                        {/* Enfoque Estructural */}
                        <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                            <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                <div className="rounded-2xl border border-[var(--color-orange)]/30 bg-gradient-to-br from-card/50 to-[var(--color-orange)]/5 backdrop-blur-sm p-6 h-full text-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 flex items-center justify-center">
                                            <Layers className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-black">Enfoque Estructural</h3>
                                    </div>
                                    <p className=" mb-4">
                                        Se centra en <strong className="text-[var(--color-orange)]">cómo está construida</strong>:
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 shadow-sm">
                                            <Cpu className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Procesador (CPU)</p>
                                                <p className="text-sm ">El cerebro de la computadora, ejecuta instrucciones</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 shadow-sm">
                                            <Database className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Memoria</p>
                                                <p className="text-sm ">Almacena datos y programas (RAM, ROM, caché)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 shadow-sm">
                                            <Server className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Entrada/Salida (E/S)</p>
                                                <p className="text-sm ">Permite la comunicación con el exterior</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                        <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">📐 Esquema básico:</p>
                                        <div className="font-mono text-sm  text-center py-2">
                                            CPU ↔ Memoria ↔ Dispositivos de E/S
                                        </div>
                                        <p className="text-xs  mt-2">
                                            La CPU se comunica con la memoria y los dispositivos de E/S para ejecutar programas
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </AnimatedContent>
                </div>
            </SectionContainer>
        </AnimatedContent>

        <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

        {/* Additional Information Section */}
        <AnimatedContent direction="vertical" distance={60}>
            <SectionContainer id="informacion-adicional">
                <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                        <span className="text-2xl">📚</span>
                    </div>
                        <SplitText 
                            text="Información Adicional Importante"
                            tag="h2"
                            className="text-4xl font-bold text-[var(--color-teal)]"
                            delay={35}
                        splitType="words"
                        textAlign="left"
                    />
                </div>

                <div className="space-y-6">
                    <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                        <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.25)">
                            <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                <h3 className="text-xl font-semibold text-[var(--color-teal-3)] mb-3 flex items-center gap-2">
                                    🏗️ Arquitectura von Neumann vs. Harvard
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)]/20 to-transparent border border-[var(--color-teal-2)]/30 shadow-md">
                                        <h4 className="font-semibold text-[var(--color-teal-3)] mb-2 flex items-center gap-2">
                                            <CircuitBoard className="w-5 h-5 text-[var(--color-teal-3)]" />
                                                Von Neumann
                                            </h4>
                                            <p className="text-sm mb-2 text-white">Usa una <strong className="text-[var(--color-teal-2)]">sola memoria</strong> para instrucciones y datos.</p>
                                            <ul className="text-sm space-y-1">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                    <span className="text-white">Más simple y flexible</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                    <span className="text-white">Usado en PCs y servidores</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/20 to-transparent border border-[var(--color-orange)]/30 shadow-md">
                                            <h4 className="font-semibold text-[var(--color-orange)] mb-2 flex items-center gap-2">
                                                <Microchip className="w-5 h-5 text-[var(--color-orange)]" />
                                                Harvard
                                            </h4>
                                            <p className="text-sm mb-2 text-white">Usa <strong className="text-[var(--color-orange)]">memorias separadas</strong> para instrucciones y datos.</p>
                                            <ul className="text-sm space-y-1">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                    <span className="text-white">Más rápida y eficiente</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                    <span className="text-white">Usado en microcontroladores</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                            <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border-[var(--color-orange)]/30">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: '#FFA500' }}>
                                        ⚙️ Componentes clave de la CPU
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)]/15 to-transparent border border-[var(--color-teal-2)]/30 shadow-md">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Cpu className="w-6 h-6 text-[var(--color-teal-2)]" />
                                                <h4 className="font-semibold text-[var(--color-teal-3)]">ALU</h4>
                                            </div>
                                            <p className="text-sm text-white">Unidad Aritmético-Lógica que realiza cálculos</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/15 to-transparent border border-[var(--color-orange)]/30 shadow-md">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Workflow className="w-6 h-6 text-[var(--color-orange)]" />
                                                <h4 className="font-semibold text-[var(--color-orange)]">UC</h4>
                                            </div>
                                            <p className="text-sm text-white">Unidad de Control que dirige las operaciones</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-3)]/15 to-transparent border border-[var(--color-teal-3)]/30 shadow-md">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Database className="w-6 h-6 text-[var(--color-teal-3)]" />
                                                <h4 className="font-semibold text-[var(--color-teal-3)]">Registros</h4>
                                            </div>
                                            <p className="text-sm text-white">Pequeñas memorias rápidas dentro de la CPU</p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.3}>
                            <SpotlightCard spotlightColor="rgba(0, 124, 120, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-2)]/10 to-transparent border-[var(--color-teal-2)]/30">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">🎯</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-2">Importancia del concepto de "Programa Almacenado"</h3>
                                            <p className="text-white">
                                                Este concepto permitió que las computadoras fueran <strong className="text-[var(--color-teal-2)]">programables</strong>, lo que las hizo versátiles y sentó las bases del software moderno. Sin esta idea revolucionaria, las computadoras seguirían siendo máquinas especializadas que solo pueden realizar una tarea específica.
                                            </p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        {/* Call to Action */}
                        <AnimatedContent direction="vertical" distance={40} delay={0.4}>
                            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 text-center">
                                <SplitText 
                                    text="¿Listo para profundizar más?"
                                    tag="h3"
                                    className="text-3xl font-bold text-[var(--color-teal)] mb-4"
                                    delay={50}
                                    splitType="words"
                                />
                                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Continúa tu viaje de aprendizaje explorando los próximos temas de arquitectura de computadoras
                                </p>
                                <div className="flex justify-center gap-4 flex-wrap">
                                    <Link to="/cpu_organization">
                                        <Button size="lg" className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-orange)]/80 hover:from-[var(--color-orange)]/90 hover:to-[var(--color-orange)]/70 text-white shadow-lg">
                                            <ArrowRight className="w-5 h-5" />
                                            Siguiente Unidad
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </SectionContainer>
            </AnimatedContent>
            </div>
        </div>
    )
}