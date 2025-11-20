import { Cpu, Layers, GitBranch, Database, Activity, Zap, ChevronRight, Server, CircuitBoard, Workflow, Microchip, Binary, HardDrive, Sparkles, Clock, Brain, Atom, BookOpen, ArrowRight, Package, ListChecks, Flag, MemoryStick, Radio, Boxes, ArrowRightLeft, Box } from 'lucide-react';
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

export default function U2CPUOrganization() {
    // Carousel items for CPU components
    const cpuComponents = [
        {
            title: 'Unidad de Control',
            description: 'Coordina todas las operaciones del CPU',
            id: 1,
            icon: <Workflow className="w-8 h-8" />
        },
        {
            title: 'ALU',
            description: 'Operaciones aritméticas y lógicas',
            id: 2,
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: 'Registros',
            description: 'Almacenamiento rápido de datos',
            id: 3,
            icon: <Database className="w-8 h-8" />
        },
        {
            title: 'Buses',
            description: 'Comunicación entre componentes',
            id: 4,
            icon: <ArrowRightLeft className="w-8 h-8" />
        },
        {
            title: 'Decodificador',
            description: 'Interpreta instrucciones',
            id: 5,
            icon: <CircuitBoard className="w-8 h-8" />
        }
    ];

    // Stack images for CPU architecture
    const stackImages = [
        { id: 1, img: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?q=80&w=500&auto=format' },
        { id: 2, img: 'https://images.unsplash.com/photo-1591238372408-9999c0d7e3f3?q=80&w=500&auto=format' },
        { id: 3, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format' },
        { id: 4, img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=500&auto=format' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-[var(--color-teal-3)]/5 to-background">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/15 to-[var(--color-teal-3)]/10 px-8 py-20 mb-12">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-5xl mx-auto">
                    <AnimatedContent direction="vertical" distance={50} delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-6 border border-[var(--color-orange)]/30 shadow-lg">
                            <Cpu className="w-4 h-4" />
                            Unidad 2
                        </div>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ paddingBottom: '0.5rem' }}>
                            <TextType
                                text={['Organización del CPU']}
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
                                text="Descubre cómo funciona el cerebro de la computadora: el procesador central (CPU), sus componentes fundamentales, ciclo de instrucciones y arquitecturas."
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
                            items={cpuComponents}
                            baseWidth={400}
                            autoplay={true}
                            autoplayDelay={4000}
                            pauseOnHover={true}
                            loop={true}
                        />
                    </div>
                </div>
            </AnimatedContent>

            {/* Stack Component - Layered CPU Architecture */}
            <AnimatedContent direction="vertical" distance={60} delay={0.3}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="text-center mb-8">
                        <SplitText 
                            text="Capas del Procesador"
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
                {/* Section 2.1: ¿Qué es el Procesador (CPU)? */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="que-es-cpu">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-teal-2)]/30 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="2.1 ¿Qué es el Procesador (CPU)?"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-6" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center">
                                            <span className="text-2xl">🧠</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-2">El Cerebro de la Computadora</h3>
                                            <p className="text-base text-white">
                                                El <strong className="text-[var(--color-teal-2)]">CPU (Unidad Central de Procesamiento)</strong> es el componente principal de cualquier sistema computacional. Es responsable de ejecutar todas las instrucciones y coordinar las operaciones del sistema.
                                            </p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.15}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Ejecutar Instrucciones" icon={<ListChecks className="w-5 h-5" />}>
                                        <p className="text-white">
                                            El CPU lee y ejecuta las instrucciones de los <strong className="text-[var(--color-teal-2)]">programas almacenados</strong> en la memoria, una tras otra.
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Procesar Datos" icon={<Activity className="w-5 h-5" />}>
                                        <p className="text-white">
                                            Realiza <strong className="text-[var(--color-orange)]">operaciones aritméticas y lógicas</strong> sobre los datos que recibe.
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.25} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 124, 120, 0.3)">
                                    <InfoCard title="Coordinar Operaciones" icon={<Workflow className="w-5 h-5" />}>
                                        <p className="text-white">
                                            Administra y <strong className="text-[var(--color-teal-3)]">sincroniza todas las operaciones</strong> del sistema computacional.
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        {/* Practical Example */}
                        <AnimatedContent direction="vertical" distance={40} delay={0.3}>
                            <div className="rounded-2xl border border-[var(--color-orange)]/30 bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent backdrop-blur-sm p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[var(--color-orange)]">Ejemplo Práctico</h3>
                                </div>
                                <p className="text-white mb-4">
                                    Cuando ejecutas la instrucción <code className="px-2 py-1 bg-black/30 rounded text-[var(--color-teal-2)] font-mono">ADD AX, [10]</code>, el CPU realiza los siguientes pasos:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-white">1</span>
                                        </div>
                                        <p className="text-white">Busca la instrucción en memoria</p>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-white">2</span>
                                        </div>
                                        <p className="text-white">Identifica que es una operación de suma</p>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-white">3</span>
                                        </div>
                                        <p className="text-white">Obtiene el valor de la posición de memoria 10</p>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-white">4</span>
                                        </div>
                                        <p className="text-white">Realiza la operación de suma</p>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-white">5</span>
                                        </div>
                                        <p className="text-white">Guarda el resultado en el registro AX</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 2.2: Ciclo de Instrucción */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="ciclo-instruccion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Clock className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="2.2 Ciclo de Instrucción"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <p className="text-base mb-4 text-white">
                                        El CPU sigue un <strong className="text-[var(--color-teal-2)]">procedimiento bien establecido</strong> para cada instrucción, dividido en dos fases principales que se repiten continuamente:
                                    </p>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* FETCH Phase */}
                            <AnimatedContent direction="horizontal" distance={60} delay={0.15}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-gradient-to-br from-card/50 to-[var(--color-teal-3)]/5 backdrop-blur-sm p-6 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center">
                                                <Package className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-[var(--color-teal)]">FASE FETCH</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4 text-white">
                                            <strong className="text-[var(--color-teal-3)]">Búsqueda de la instrucción:</strong>
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-[var(--color-teal)]">Cargar la siguiente instrucción</p>
                                                    <p className="text-sm text-white">Desde la memoria principal al registro IR</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-[var(--color-teal)]">Incrementar el secuenciador</p>
                                                    <p className="text-sm text-white">El PC apunta a la siguiente instrucción</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-[var(--color-teal)]">Interpretar la instrucción</p>
                                                    <p className="text-sm text-white">El decodificador analiza qué hacer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </AnimatedContent>

                            {/* EXECUTE Phase */}
                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <div className="rounded-2xl border border-[var(--color-orange)]/30 bg-gradient-to-br from-card/50 to-[var(--color-orange)]/5 backdrop-blur-sm p-6 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-[var(--color-orange)]">FASE EXECUTE</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4 text-white">
                                            <strong className="text-[var(--color-orange)]">Ejecución de la instrucción:</strong>
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-[var(--color-teal)]">Cargar los operandos</p>
                                                    <p className="text-sm text-white">Obtener los datos necesarios para la operación</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-[var(--color-teal)]">Ejecutar la operación</p>
                                                    <p className="text-sm text-white">ALU realiza suma, resta, AND, OR, etc.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-[var(--color-teal)]">Guardar el resultado</p>
                                                    <p className="text-sm text-white">Almacenar en registro o memoria</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-[var(--color-teal)]">Verificar interrupciones</p>
                                                    <p className="text-sm text-white">Revisar solicitudes de dispositivos externos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 2.3: Elementos para Construir el CPU */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="elementos-cpu">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-3)]/30 shadow-lg">
                                <Boxes className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="2.3 Elementos para Construir el CPU"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={25}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                    <p className="text-base mb-4 text-white">
                                        El CPU está compuesto por varios <strong className="text-[var(--color-teal-2)]">componentes fundamentales</strong> que trabajan en conjunto para procesar instrucciones:
                                    </p>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        {/* ScrollStack - CPU Components */}
                        <AnimatedContent direction="vertical" distance={40} delay={0.15}>
                            <div className="mb-12">
                                <div className="text-center mb-6">
                                    <SplitText 
                                        text="Componentes del Procesador"
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
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal-2)]/90 to-[var(--color-teal-3)]/70 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <GitBranch className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">PC</h4>
                                                        <p className="text-white/90 text-lg">Program Counter</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Registro Contador de Programa</p>
                                                <p className="text-white/90 mb-3">Apunta a la dirección de la próxima instrucción a ejecutar</p>
                                                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                                                    <p className="text-sm text-white">✓ Se incrementa automáticamente después de cada instrucción</p>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/90 to-[var(--color-orange)]/70 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <MemoryStick className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">IR</h4>
                                                        <p className="text-white/90 text-lg">Instruction Register</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Registro de Instrucción</p>
                                                <p className="text-white/90 mb-3">Almacena la instrucción actual que se está ejecutando</p>
                                                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                                                    <p className="text-sm text-white">✓ Mantiene la instrucción mientras se decodifica y ejecuta</p>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal-3)]/90 to-[var(--color-teal)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <CircuitBoard className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">Decodificador</h4>
                                                        <p className="text-white/90 text-lg">Decoder</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Unidad de Decodificación</p>
                                                <p className="text-white/90 mb-3">Interpreta la instrucción y determina qué operación realizar</p>
                                                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                                                    <p className="text-sm text-white">✓ Convierte el código de operación en señales de control</p>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/85 to-[var(--color-teal-1)]/85 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Workflow className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">UC</h4>
                                                        <p className="text-white/90 text-lg">Control Unit</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Unidad de Control</p>
                                                <p className="text-white/90 mb-3">Coordina todas las actividades del CPU y dirige el flujo de datos</p>
                                                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                                                    <p className="text-sm text-white">✓ Genera señales de control para todos los componentes</p>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal-2)]/95 to-[var(--color-teal-3)]/85 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Database className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">Registros</h4>
                                                        <p className="text-white/90 text-lg">R0, R1, ..., Rn</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Registros de Propósito General</p>
                                                <p className="text-white/90 mb-3">Almacenan temporalmente datos y operandos durante el procesamiento</p>
                                                <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                                                    <p className="text-sm text-white">✓ Acceso ultra-rápido, más veloces que la memoria RAM</p>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/90 to-[var(--color-teal-2)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Cpu className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">ALU</h4>
                                                        <p className="text-white/90 text-lg">Arithmetic Logic Unit</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Unidad Aritmético-Lógica</p>
                                                <p className="text-white/90 mb-3">Realiza operaciones matemáticas y lógicas</p>
                                                <div className="space-y-2">
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white">• Entradas: X, Y (operandos)</p>
                                                    </div>
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white">• Salida: Z (resultado)</p>
                                                    </div>
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white">• Ops: +, -, AND, OR, XOR, etc.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal)]/90 to-[var(--color-teal-1)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Flag className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">FLAGS</h4>
                                                        <p className="text-white/90 text-lg">Status Flags</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Banderas de Estado</p>
                                                <p className="text-white/90 mb-3">Indicadores del estado de operaciones recientes</p>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white font-bold">Z (Zero)</p>
                                                        <p className="text-xs text-white/80">Resultado = 0</p>
                                                    </div>
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white font-bold">C (Carry)</p>
                                                        <p className="text-xs text-white/80">Acarreo</p>
                                                    </div>
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white font-bold">N (Negative)</p>
                                                        <p className="text-xs text-white/80">Negativo</p>
                                                    </div>
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white font-bold">V (Overflow)</p>
                                                        <p className="text-xs text-white/80">Desborde</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/95 to-[var(--color-teal-3)]/85 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <ArrowRightLeft className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">Buses</h4>
                                                        <p className="text-white/90 text-lg">Communication Buses</p>
                                                    </div>
                                                </div>
                                                <p className="text-white text-lg font-semibold mb-2">Buses de Comunicación</p>
                                                <p className="text-white/90 mb-3">Permiten el transporte de información entre componentes</p>
                                                <div className="space-y-2">
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white"><strong>Bus de Direcciones:</strong> Indica dónde leer/escribir</p>
                                                    </div>
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white"><strong>Bus de Datos:</strong> Transporta la información</p>
                                                    </div>
                                                    <div className="p-2 rounded bg-white/10 border border-white/20">
                                                        <p className="text-sm text-white"><strong>Bus de Control:</strong> Señales de coordinación</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollStackItem>
                                    </ScrollStack>
                                </div>
                            </div>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />
                {/* Section 2.4: Estructura Básica del CPU */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="estructura-cpu">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-1)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-1)]/30 shadow-lg">
                                <Layers className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="2.4 Estructura Básica del CPU"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <div className="text-center mb-8">
                            <BlurText 
                                text="El CPU se organiza en dos secciones principales que trabajan en conjunto:"
                                className="text-lg text-white"
                                delay={20}
                                animateBy="words"
                            />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Datapath */}
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-gradient-to-br from-card/50 to-[var(--color-teal-3)]/5 backdrop-blur-sm p-6 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center">
                                                <ArrowRightLeft className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-[var(--color-teal)]">Datapath</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4 text-white">
                                            <strong className="text-[var(--color-teal-3)]">Camino de Datos</strong>
                                        </p>
                                        <div className="space-y-3">
                                            <div className="p-4 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <p className="font-semibold text-[var(--color-teal)] mb-2">Función:</p>
                                                <p className="text-sm text-white">Movimiento y transformación de datos a través del procesador</p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <p className="font-semibold text-[var(--color-teal)] mb-2">Componentes:</p>
                                                <ul className="text-sm space-y-1 text-white">
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                        <span>ALU (Unidad Aritmético-Lógica)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                        <span>Registros de propósito general</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                        <span>Buses de datos internos</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-teal-2)] flex-shrink-0" />
                                                        <span>Multiplexores y demultiplexores</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </AnimatedContent>

                            {/* Control Unit */}
                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <div className="rounded-2xl border border-[var(--color-orange)]/30 bg-gradient-to-br from-card/50 to-[var(--color-orange)]/5 backdrop-blur-sm p-6 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 flex items-center justify-center">
                                                <Workflow className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-[var(--color-orange)]">Unidad de Control</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4 text-white">
                                            <strong className="text-[var(--color-orange)]">Control Unit</strong>
                                        </p>
                                        <div className="space-y-3">
                                            <div className="p-4 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <p className="font-semibold text-[var(--color-teal)] mb-2">Función:</p>
                                                <p className="text-sm text-white">Dirige las operaciones del datapath y coordina el flujo de ejecución</p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <p className="font-semibold text-[var(--color-teal)] mb-2">Componentes:</p>
                                                <ul className="text-sm space-y-1 text-white">
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                        <span>Decodificador de instrucciones</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                        <span>Lógica de control (FSM o microprograma)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                        <span>Secuenciador (PC)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[var(--color-orange)] flex-shrink-0" />
                                                        <span>Generador de señales de control</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />
                {/* Section 2.5: Arquitecturas del Procesador */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="arquitecturas">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Microchip className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="2.5 Arquitecturas del Procesador"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={35}
                                splitType="words"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <p className="text-base mb-4 text-white">
                                        Existen diferentes formas de organizar el procesador según cómo maneja los operandos y las instrucciones:
                                    </p>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 mb-8">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <AccordionItem value="arch1" className="border-[var(--color-orange)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white text-lg font-bold border-2 border-[var(--color-orange)]/50 shadow-lg">1</span>
                                                <span className="font-bold">Arquitectura de Acumulador</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-[var(--color-orange)] mb-3 flex items-center gap-2">
                                                            <Sparkles className="w-5 h-5 text-[var(--color-orange)]" />
                                                            Características:
                                                        </h4>
                                                        <AnimatedList 
                                                            items={[
                                                                '📍 Usa un solo registro especial (acumulador)',
                                                                '✅ Simple de implementar',
                                                                '⚠️ Limitada flexibilidad',
                                                                '📝 Ejemplo: ADD [10] suma memoria[10] al acumulador'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                            <p className="text-sm font-semibold text-[var(--color-orange)] mb-2">Ejemplo de operación:</p>
                                                            <div className="font-mono text-sm text-white space-y-1">
                                                                <p>LOAD A    <span className="text-muted-foreground">// AC ← A</span></p>
                                                                <p>ADD B     <span className="text-muted-foreground">// AC ← AC + B</span></p>
                                                                <p>STORE C   <span className="text-muted-foreground">// C ← AC</span></p>
                                                            </div>
                                                            <p className="text-xs text-white mt-3">AC (Acumulador) es el único registro visible para operaciones aritméticas</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <AccordionItem value="arch2" className="border-[var(--color-teal-2)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-2)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white text-lg font-bold border-2 border-[var(--color-teal-2)]/50 shadow-lg">2</span>
                                                <span className="font-bold">Arquitectura de Pila</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-[var(--color-teal-3)] mb-3 flex items-center gap-2">
                                                            <Sparkles className="w-5 h-5 text-[var(--color-teal-2)]" />
                                                            Características:
                                                        </h4>
                                                        <AnimatedList 
                                                            items={[
                                                                '📚 Usa una estructura LIFO (Last In, First Out)',
                                                                '🔝 TOS (Top of Stack): elemento superior',
                                                                '📍 SP (Stack Pointer): apuntador de pila',
                                                                '✅ Instrucciones muy cortas',
                                                                '📝 Ejemplo: ADD suma TOS + NOS'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 mb-4">
                                                            <p className="text-sm font-semibold text-[var(--color-teal-3)] mb-2">Ejemplo de operación:</p>
                                                            <div className="font-mono text-sm text-white space-y-1">
                                                                <p>PUSH A    <span className="text-muted-foreground">// Apilar A</span></p>
                                                                <p>PUSH B    <span className="text-muted-foreground">// Apilar B</span></p>
                                                                <p>ADD       <span className="text-muted-foreground">// TOS ← TOS + NOS</span></p>
                                                                <p>POP C     <span className="text-muted-foreground">// C ← TOS</span></p>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20">
                                                            <p className="text-xs text-white">
                                                                <strong>Operaciones:</strong> PUSH (agregar), POP (remover), ADD opera sobre el tope de la pila
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <AccordionItem value="arch3" className="border-[var(--color-teal-3)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-3)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-teal-2)] text-white text-lg font-bold border-2 border-[var(--color-teal-3)]/50 shadow-lg">3</span>
                                                <span className="font-bold">Arquitectura de Registros - Dos Direcciones</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-[var(--color-teal-3)] mb-3 flex items-center gap-2">
                                                            <Sparkles className="w-5 h-5 text-[var(--color-teal-3)]" />
                                                            Características:
                                                        </h4>
                                                        <AnimatedList 
                                                            items={[
                                                                '📋 Formato: OPERACIÓN destino, fuente',
                                                                '🔄 Un operando es fuente y destino',
                                                                '📝 Ejemplo: ADD R1, R2 → R1 = R1 + R2',
                                                                '✅ Más flexible que acumulador',
                                                                '⚡ Reduce accesos a memoria'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20">
                                                            <p className="text-sm font-semibold text-[var(--color-teal-3)] mb-2">Ejemplo de operación:</p>
                                                            <div className="font-mono text-sm text-white space-y-1">
                                                                <p>LOAD R1, A   <span className="text-muted-foreground">// R1 ← A</span></p>
                                                                <p>LOAD R2, B   <span className="text-muted-foreground">// R2 ← B</span></p>
                                                                <p>ADD R1, R2   <span className="text-muted-foreground">// R1 ← R1 + R2</span></p>
                                                                <p>STORE C, R1  <span className="text-muted-foreground">// C ← R1</span></p>
                                                            </div>
                                                            <p className="text-xs text-white mt-3">Uno de los registros actúa como fuente y destino simultáneamente</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.35)">
                                    <AccordionItem value="arch4" className="border-[var(--color-orange)] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-[var(--color-teal-3)]/5">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white text-lg font-bold border-2 border-[var(--color-orange)]/50 shadow-lg">4</span>
                                                <span className="font-bold">Arquitectura de Registros - Tres Direcciones</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-[var(--color-orange)] mb-3 flex items-center gap-2">
                                                            <Brain className="w-5 h-5 text-[var(--color-orange)]" />
                                                            Características:
                                                        </h4>
                                                        <AnimatedList 
                                                            items={[
                                                                '📋 Formato: OPERACIÓN dest, fuente1, fuente2',
                                                                '🎯 Operandos separados para fuentes y destino',
                                                                '📝 Ejemplo: ADD R1, R2, R3 → R1 = R2 + R3',
                                                                '✅ Máxima flexibilidad',
                                                                '🚀 Usado en procesadores modernos (RISC)'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-orange)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-orange)]/20">
                                                            <p className="text-sm font-semibold text-[var(--color-orange)] mb-2">Ejemplo de operación:</p>
                                                            <div className="font-mono text-sm text-white space-y-1">
                                                                <p>LOAD R1, A     <span className="text-muted-foreground">// R1 ← A</span></p>
                                                                <p>LOAD R2, B     <span className="text-muted-foreground">// R2 ← B</span></p>
                                                                <p>ADD R3, R1, R2 <span className="text-muted-foreground">// R3 ← R1 + R2</span></p>
                                                                <p>STORE C, R3    <span className="text-muted-foreground">// C ← R3</span></p>
                                                            </div>
                                                            <p className="text-xs text-white mt-3">Los operandos fuente no se modifican, resultado va a un registro separado</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>
                            </Accordion>
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
                            {/* Interrupts */}
                            <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                                <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.25)">
                                    <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                        <h3 className="text-xl font-semibold text-[var(--color-teal-3)] mb-3 flex items-center gap-2">
                                            <Radio className="w-5 h-5 text-[var(--color-teal-2)]" />
                                            Mecanismo de Interrupciones
                                        </h3>
                                        <p className="text-base text-white mb-4">
                                            Las interrupciones permiten que <strong className="text-[var(--color-teal-2)]">dispositivos externos</strong> (teclado, disco, red) soliciten atención del CPU sin esperar a que termine el procesamiento actual.
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white">1</span>
                                                </div>
                                                <p className="text-white">Dispositivo envía señal INT (interrupción)</p>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white">2</span>
                                                </div>
                                                <p className="text-white">CPU termina la instrucción actual</p>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white">3</span>
                                                </div>
                                                <p className="text-white">Guarda el estado actual (registros, PC, flags)</p>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white">4</span>
                                                </div>
                                                <p className="text-white">Ejecuta la rutina de servicio de interrupción (ISR)</p>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white">5</span>
                                                </div>
                                                <p className="text-white">Recupera el estado guardado y continúa la ejecución normal</p>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            {/* Evolution */}
                            <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                                <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.25)">
                                    <InfoCard className="bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border-[var(--color-orange)]/30">
                                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: '#FF5900' }}>
                                            <Clock className="w-5 h-5 text-[var(--color-orange)]" />
                                            Evolución de las Arquitecturas
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)]/15 to-transparent border border-[var(--color-teal-2)]/30 shadow-md">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <HardDrive className="w-6 h-6 text-[var(--color-teal-2)]" />
                                                    <h4 className="font-semibold text-[var(--color-teal-3)]">Antiguo</h4>
                                                </div>
                                                <p className="text-sm text-white">Acumulador y Pila: menos flexibles pero más simples</p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/15 to-transparent border border-[var(--color-orange)]/30 shadow-md">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Microchip className="w-6 h-6 text-[var(--color-orange)]" />
                                                    <h4 className="font-semibold text-[var(--color-orange)]">Moderno</h4>
                                                </div>
                                                <p className="text-sm text-white">Registros: más eficiente y versátil para aplicaciones generales</p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-3)]/15 to-transparent border border-[var(--color-teal-3)]/30 shadow-md">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Brain className="w-6 h-6 text-[var(--color-teal-3)]" />
                                                    <h4 className="font-semibold text-[var(--color-teal-3)]">Actual</h4>
                                                </div>
                                                <p className="text-sm text-white">Multi-núcleo con arquitecturas híbridas y especializadas</p>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            {/* Performance */}
                            <AnimatedContent direction="vertical" distance={40} delay={0.3}>
                                <SpotlightCard spotlightColor="rgba(0, 124, 120, 0.25)">
                                    <InfoCard className="bg-gradient-to-br from-[var(--color-teal-2)]/10 to-transparent border-[var(--color-teal-2)]/30">
                                        <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-3 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-[var(--color-teal-2)]" />
                                            Factores de Rendimiento del CPU
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="p-4 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Clock className="w-5 h-5 text-[var(--color-teal-2)]" />
                                                    <h4 className="font-semibold text-[var(--color-teal-3)]">Frecuencia de reloj</h4>
                                                </div>
                                                <p className="text-sm text-white">Velocidad de operación (GHz). Más ciclos por segundo = más rápido</p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Database className="w-5 h-5 text-[var(--color-teal-2)]" />
                                                    <h4 className="font-semibold text-[var(--color-teal-3)]">Cantidad de registros</h4>
                                                </div>
                                                <p className="text-sm text-white">Más registros = menos accesos a memoria = mejor rendimiento</p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Binary className="w-5 h-5 text-[var(--color-teal-2)]" />
                                                    <h4 className="font-semibold text-[var(--color-teal-3)]">Tamaño de palabra</h4>
                                                </div>
                                                <p className="text-sm text-white">Bits procesados simultáneamente (32-bit, 64-bit)</p>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            {/* Visual Summary */}
                            <AnimatedContent direction="vertical" distance={40} delay={0.4}>
                                <div className="rounded-2xl border border-[var(--color-orange)]/30 bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 backdrop-blur-sm p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] flex items-center justify-center">
                                            <Workflow className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[var(--color-teal)]">Resumen Visual del Funcionamiento del CPU</h3>
                                    </div>
                                    <div className="p-6 rounded-lg bg-black/20 border border-[var(--color-teal-3)]/30">
                                        <div className="font-mono text-sm text-white space-y-2 text-center">
                                            <div className="flex items-center justify-center gap-2 flex-wrap">
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-2)]/20 border border-[var(--color-teal-2)]/40">PC</span>
                                                <span>→</span>
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-3)]/20 border border-[var(--color-teal-3)]/40">Bus Direcciones</span>
                                                <span>→</span>
                                                <span className="px-3 py-1 rounded bg-[var(--color-orange)]/20 border border-[var(--color-orange)]/40">Memoria</span>
                                                <span>→</span>
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-2)]/20 border border-[var(--color-teal-2)]/40">Instrucción</span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <span className="text-2xl">↓</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-2 flex-wrap">
                                                <span className="px-3 py-1 rounded bg-[var(--color-orange)]/20 border border-[var(--color-orange)]/40">IR</span>
                                                <span>→</span>
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-3)]/20 border border-[var(--color-teal-3)]/40">Decodificador</span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <span className="text-2xl">↓</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-2 flex-wrap">
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-2)]/20 border border-[var(--color-teal-2)]/40">Unidad de Control</span>
                                                <span>→</span>
                                                <span className="px-3 py-1 rounded bg-[var(--color-orange)]/20 border border-[var(--color-orange)]/40">Registros</span>
                                                <span>→</span>
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-3)]/20 border border-[var(--color-teal-3)]/40">ALU</span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <span className="text-2xl">↓</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-2 flex-wrap">
                                                <span className="px-3 py-1 rounded bg-[var(--color-orange)]/20 border border-[var(--color-orange)]/40">Resultado</span>
                                                <span>→</span>
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-2)]/20 border border-[var(--color-teal-2)]/40">Registros/Memoria</span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <span className="text-2xl">↓</span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <span className="px-3 py-1 rounded bg-[var(--color-teal-3)]/20 border border-[var(--color-teal-3)]/40">Actualizar FLAGS</span>
                                            </div>
                                        </div>
                                        <p className="text-center text-sm text-white mt-4">
                                            Esta organización permite que el CPU ejecute <strong className="text-[var(--color-teal-2)]">billones de instrucciones por segundo</strong> de manera coordinada y eficiente.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedContent>

                            {/* Call to Action */}
                            <AnimatedContent direction="vertical" distance={40} delay={0.5}>
                                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 text-center">
                                    <SplitText 
                                        text="¿Listo para el siguiente nivel?"
                                        tag="h3"
                                        className="text-3xl font-bold text-[var(--color-teal)] mb-4"
                                        delay={50}
                                        splitType="words"
                                    />
                                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                        Continúa aprendiendo sobre el diseño de conjunto de instrucciones y cómo el CPU ejecuta programas
                                    </p>
                                    <div className="flex justify-center gap-4 flex-wrap">
                                        <Link to="/machine_organization_and_architecture_introduction">
                                            <Button size="lg" variant="outline" className="border-[var(--color-teal-3)] hover:bg-[var(--color-teal-3)]/20">
                                                Unidad Anterior
                                            </Button>
                                        </Link>
                                        <Link to="/design_of_instructions_set">
                                            <Button size="lg" className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-orange)]/80 hover:from-[var(--color-orange)]/90 hover:to-[var(--color-orange)]/70 text-white shadow-lg">
                                                Siguiente Unidad
                                                <ArrowRight className="w-5 h-5 ml-2" />
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
