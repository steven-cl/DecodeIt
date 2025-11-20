import { Cpu, Layers, GitBranch, Zap, ChevronRight, Server, CircuitBoard, Workflow, Settings, Code, PlayCircle, Terminal, FileCode, Boxes, Network, Gauge, ArrowRight, Clock, Cog, Database, Activity, Binary, Route } from 'lucide-react';
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

export default function U5ControlUnity() {
    // Carousel items with control unit concepts
    const controlUnitImages = [
        {
            title: 'Director de Orquesta',
            description: 'Coordina todas las operaciones del CPU',
            id: 1,
            icon: <Settings className="w-8 h-8" />
        },
        {
            title: 'Ciclo de Instrucción',
            description: 'FETCH y EXECUTE',
            id: 2,
            icon: <PlayCircle className="w-8 h-8" />
        },
        {
            title: 'Señales de Control',
            description: 'Controla registros, memoria y ALU',
            id: 3,
            icon: <Activity className="w-8 h-8" />
        },
        {
            title: 'Microprogramación',
            description: 'Control flexible y programable',
            id: 4,
            icon: <Code className="w-8 h-8" />
        },
        {
            title: 'Control Alambrado',
            description: 'Rápido y eficiente',
            id: 5,
            icon: <Cog className="w-8 h-8" />
        }
    ];

    // Stack images for control unit architecture
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
                            <Settings className="w-4 h-4" />
                            Unidad 5
                        </div>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ paddingBottom: '0.5rem' }}>
                            <TextType
                                text={['Unidad de Control']}
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
                                text="El director de orquesta del procesador - Coordina y controla todas las operaciones del CPU durante la ejecución de instrucciones"
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
                            items={controlUnitImages}
                            baseWidth={400}
                            autoplay={true}
                            autoplayDelay={4000}
                            pauseOnHover={true}
                            loop={true}
                        />
                    </div>
                </div>
            </AnimatedContent>

            {/* Stack Component - Control Unit Layers */}
            <AnimatedContent direction="vertical" distance={60} delay={0.3}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="text-center mb-8">
                        <SplitText 
                            text="Capas de Control"
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
                {/* Section 1: ¿Qué es la Unidad de Control? */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="que-es-unidad-control">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-teal-2)]/30 shadow-lg">
                                <Settings className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="¿Qué es la Unidad de Control?"
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
                                            <span className="text-2xl">🎭</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-2">Director de Orquesta</h3>
                                            <p className="text-base text-white">
                                                La <strong className="text-[var(--color-teal-2)]">Unidad de Control</strong> es el "director de orquesta" del procesador. Su función principal es <strong className="text-[var(--color-teal-2)]">coordinar y controlar</strong> todas las operaciones del CPU durante la ejecución de instrucciones.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                        <p className="text-white flex items-center gap-2">
                                            <span className="text-2xl">🎪</span>
                                            <strong>Analogía:</strong> Como un <strong className="text-[var(--color-orange)]">titiritero</strong> que jala las cuerdas para controlar cada dispositivo del procesador.
                                        </p>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 2: Ciclo de Instrucción */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="ciclo-instruccion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <PlayCircle className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="Función Principal: Ciclo de Instrucción"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Fase FETCH (Búsqueda)" icon={<Database className="w-5 h-5" />}>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-teal-2)] text-white flex items-center justify-center text-xs font-bold">1</span>
                                                <p className="text-white text-sm"><strong>Leer próxima instrucción:</strong> PC → MAR, activar READ</p>
                                            </div>
                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-teal-2)] text-white flex items-center justify-center text-xs font-bold">2</span>
                                                <p className="text-white text-sm"><strong>Incrementar PC:</strong> PC + 1 → PC</p>
                                            </div>
                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-teal-2)] text-white flex items-center justify-center text-xs font-bold">3</span>
                                                <p className="text-white text-sm"><strong>Decodificar:</strong> MDR → IR, interpretar instrucción</p>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Fase EXECUTE (Ejecución)" icon={<Cpu className="w-5 h-5" />}>
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-orange)] text-white flex items-center justify-center text-xs font-bold">4</span>
                                                <p className="text-white text-sm"><strong>Traer 1er operando</strong> → Registro temporal (SOURCE)</p>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-orange)] text-white flex items-center justify-center text-xs font-bold">5</span>
                                                <p className="text-white text-sm"><strong>Traer 2do operando</strong> → Registro Y</p>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-orange)] text-white flex items-center justify-center text-xs font-bold">6</span>
                                                <p className="text-white text-sm"><strong>Realizar operación</strong> ALU: Z ← [Bus] OP [Y]</p>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-orange)] text-white flex items-center justify-center text-xs font-bold">7</span>
                                                <p className="text-white text-sm"><strong>Almacenar resultado</strong> → Registro destino o memoria</p>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-orange)] text-white flex items-center justify-center text-xs font-bold">8</span>
                                                <p className="text-white text-sm"><strong>Verificar interrupciones</strong> → Servir si es necesario</p>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 3: Operaciones Básicas de Control */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="operaciones-basicas">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-3)]/30 shadow-lg">
                                <Activity className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="Operaciones Básicas de Control"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={25}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-gradient-to-br from-card/50 to-[var(--color-teal-3)]/5 backdrop-blur-sm p-6">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <AccordionItem value="registros" className="border-[var(--color-teal-2)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-2)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <Database className="w-6 h-6 text-[var(--color-teal-2)]" />
                                                <span className="font-bold">1. Control de Registros</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <AnimatedList 
                                                    items={[
                                                        '📝 Transferir contenido entre registros',
                                                        '🔌 Uso de buffers de tercer estado para aislar salidas del bus',
                                                        '⚡ Líneas de control para habilitar entrada/salida'
                                                    ]}
                                                    className="h-auto mb-4"
                                                    itemClassName="bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 rounded-lg p-3"
                                                    showGradients={false}
                                                    enableArrowNavigation={false}
                                                />
                                                <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20">
                                                    <p className="text-sm font-semibold text-[var(--color-teal-2)] mb-2">Ejemplo:</p>
                                                    <code className="text-white font-mono">MAR ← [PC]</code>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <AccordionItem value="memoria" className="border-[var(--color-orange)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <Server className="w-6 h-6 text-[var(--color-orange)]" />
                                                <span className="font-bold">2. Control de Memoria</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                        <h4 className="font-semibold text-[var(--color-teal-2)] mb-3">Para LECTURA:</h4>
                                                        <ol className="space-y-2 text-sm text-white list-decimal list-inside">
                                                            <li>Dirección → MAR</li>
                                                            <li>Activar READ</li>
                                                            <li>Memoria coloca dato en bus</li>
                                                            <li>Dato → MDR</li>
                                                        </ol>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                        <h4 className="font-semibold text-[var(--color-orange)] mb-3">Para ESCRITURA:</h4>
                                                        <ol className="space-y-2 text-sm text-white list-decimal list-inside">
                                                            <li>Dirección → MAR</li>
                                                            <li>Dato → MDR</li>
                                                            <li>Activar WRITE</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <AccordionItem value="alu" className="border-[var(--color-teal-3)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-3)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <Cpu className="w-6 h-6 text-[var(--color-teal-3)]" />
                                                <span className="font-bold">3. Control de ALU</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <AnimatedList 
                                                    items={[
                                                        '🔢 Dos operandos: X (desde bus) y Y (desde registro)',
                                                        '⚙️ Seleccionar operación (suma, AND, OR, etc.)',
                                                        '📤 Resultado → Registro Z'
                                                    ]}
                                                    className="h-auto"
                                                    itemClassName="bg-gradient-to-r from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20 rounded-lg p-3"
                                                    showGradients={false}
                                                    enableArrowNavigation={false}
                                                />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <AccordionItem value="pc" className="border-[var(--color-orange)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <Route className="w-6 h-6 text-[var(--color-orange)]" />
                                                <span className="font-bold">4. Control del PC</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2 space-y-4">
                                                <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                    <h4 className="font-semibold text-[var(--color-teal-2)] mb-2">Incrementar PC:</h4>
                                                    <ul className="space-y-1 text-sm text-white">
                                                        <li>• Usando ALU: <code>PC → Bus, Y = 0, Carry = 1 → Z = PC + 1</code></li>
                                                        <li>• Con sumador dedicado</li>
                                                    </ul>
                                                </div>
                                                <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                    <h4 className="font-semibold text-[var(--color-orange)] mb-2">Modificar PC (Saltos):</h4>
                                                    <ul className="space-y-1 text-sm text-white">
                                                        <li>• <strong>Absoluto:</strong> <code>PC ← dirección</code></li>
                                                        <li>• <strong>Relativo:</strong> <code>PC ← PC + desplazamiento</code></li>
                                                        <li>• <strong>Condicional:</strong> Depende de flags</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <AccordionItem value="interrupciones" className="border-[var(--color-teal-2)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-2)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <Zap className="w-6 h-6 text-[var(--color-teal-2)]" />
                                                <span className="font-bold">5. Control de Interrupciones</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <AnimatedList 
                                                    items={[
                                                        '🔔 Verificar señal INT',
                                                        '🎛️ Controlador de interrupciones coordina múltiples dispositivos',
                                                        '⚡ Servir rutina de interrupción cuando se solicita'
                                                    ]}
                                                    className="h-auto"
                                                    itemClassName="bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 rounded-lg p-3"
                                                    showGradients={false}
                                                    enableArrowNavigation={false}
                                                />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <AccordionItem value="flags" className="border-[var(--color-orange)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent">
                                        <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                            <div className="flex items-center gap-3">
                                                <Gauge className="w-6 h-6 text-[var(--color-orange)]" />
                                                <span className="font-bold">6. Control de Flags (Banderas)</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 mb-4">
                                                    <p className="text-white mb-2"><strong className="text-[var(--color-orange)]">PSW (Processor Status Word):</strong> Almacena estado del procesador</p>
                                                </div>
                                                <AnimatedList 
                                                    items={[
                                                        '🚩 Carry: Acarreo en operaciones',
                                                        '0️⃣ Zero: Resultado es cero',
                                                        '➖ Sign: Resultado es negativo',
                                                        '⚠️ Overflow: Desbordamiento aritmético'
                                                    ]}
                                                    className="h-auto"
                                                    itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 rounded-lg p-3"
                                                    showGradients={false}
                                                    enableArrowNavigation={false}
                                                />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </SpotlightCard>
                            </Accordion>
                        </div>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 4: Estrategias de Ejecución */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="estrategias-ejecucion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-1)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-1)]/30 shadow-lg">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="Estrategias de Ejecución por Tipo de Instrucción"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        {/* ScrollStack for Instruction Types */}
                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <div className="mb-12">
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
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal-2)]/90 to-[var(--color-teal-3)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Binary className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">Instrucciones OP</h4>
                                                        <p className="text-white/90 text-lg">Operaciones Aritméticas/Lógicas</p>
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-lg bg-black/20 backdrop-blur-sm mb-4">
                                                    <p className="text-white mb-2 font-semibold">Ejemplo: <code>ADD R1, R2</code></p>
                                                    <pre className="text-sm text-white/90 overflow-x-auto">
{`FETCH: PC→MAR, Read, PC+1, MDR→IR
EXECUTE:
  R1 → SOURCE
  R2 → Y
  ALU: Z ← SOURCE + Y
  Z → R1`}
                                                    </pre>
                                                </div>
                                            </div>
                                        </ScrollStackItem>

                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/90 to-[var(--color-orange)]/70 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <ArrowRight className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">Instrucciones MOV</h4>
                                                        <p className="text-white/90 text-lg">Transferencia</p>
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-lg bg-black/20 backdrop-blur-sm mb-4">
                                                    <p className="text-white mb-2 font-semibold">Ejemplo: <code>MOV R1, R2</code></p>
                                                    <pre className="text-sm text-white/90 overflow-x-auto">
{`FETCH: (igual que OP)
EXECUTE:
  R2 → SOURCE
  Calcular dirección destino
  SOURCE → destino`}
                                                    </pre>
                                                </div>
                                            </div>
                                        </ScrollStackItem>

                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-teal-3)]/90 to-[var(--color-teal)]/80 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <GitBranch className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">Instrucciones BRx</h4>
                                                        <p className="text-white/90 text-lg">Saltos</p>
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-lg bg-black/20 backdrop-blur-sm mb-4">
                                                    <p className="text-white mb-2 font-semibold">Ejemplo: <code>BRN dirección</code> (Salto si negativo)</p>
                                                    <pre className="text-sm text-white/90 overflow-x-auto">
{`FETCH: (igual que OP)
EXECUTE:
  Si N=1 (negativo):
    PC → Y
    desplazamiento → Bus
    ALU: Z ← PC + desplazamiento
    Z → PC`}
                                                    </pre>
                                                </div>
                                            </div>
                                        </ScrollStackItem>

                                        <ScrollStackItem>
                                            <div className="h-[350px] rounded-xl bg-gradient-to-br from-[var(--color-orange)]/95 to-[var(--color-teal-3)]/85 p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                                                        <Boxes className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-3xl font-bold text-white">PUSH / POP</h4>
                                                        <p className="text-white/90 text-lg">Pila</p>
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-lg bg-black/20 backdrop-blur-sm space-y-3">
                                                    <div>
                                                        <p className="text-white font-semibold">PUSH:</p>
                                                        <code className="text-sm text-white/90">MOV -(SP), [fuente]</code>
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-semibold">POP:</p>
                                                        <code className="text-sm text-white/90">MOV destino, (SP)+</code>
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

                {/* Section 5: Implementación */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="implementacion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Cog className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="Implementación de la Unidad de Control"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={35}
                                splitType="words"
                                textAlign="left"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="1. Control por Hardware (Alambrado)" icon={<CircuitBoard className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            <strong className="text-[var(--color-teal-2)]">Concepto:</strong> Circuitos lógicos fijos que generan señales de control
                                        </p>
                                        <div className="space-y-3 mb-4">
                                            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                                                <p className="text-sm font-semibold text-green-400 mb-1">✅ Ventajas:</p>
                                                <ul className="text-sm text-white space-y-1">
                                                    <li>• Muy rápido</li>
                                                    <li>• Eficiente para instrucciones simples</li>
                                                </ul>
                                            </div>
                                            <div className="p-3 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20">
                                                <p className="text-sm font-semibold text-red-400 mb-1">❌ Desventajas:</p>
                                                <ul className="text-sm text-white space-y-1">
                                                    <li>• Poco flexible</li>
                                                    <li>• Difícil modificar o ampliar</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20">
                                            <p className="text-xs font-semibold text-[var(--color-teal-2)] mb-1">Ejemplo:</p>
                                            <code className="text-xs text-white">Z_in = T1 + ADD·T6 + BRN·T5 + ...</code>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="2. Control Microprogramado" icon={<Code className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            <strong className="text-[var(--color-orange)]">Concepto:</strong> Las señales de control se almacenan como "microinstrucciones" en memoria
                                        </p>
                                        <div className="mb-4 space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <ChevronRight className="w-4 h-4 text-[var(--color-orange)]" />
                                                <span><strong>Memoria de Control:</strong> Almacena palabras de control (CW)</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <ChevronRight className="w-4 h-4 text-[var(--color-orange)]" />
                                                <span><strong>MicroPC (μPC):</strong> Apunta a microinstrucción actual</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <ChevronRight className="w-4 h-4 text-[var(--color-orange)]" />
                                                <span><strong>Secuenciador:</strong> Controla flujo del microprograma</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                                                <p className="text-sm font-semibold text-green-400 mb-1">✅ Ventajas:</p>
                                                <ul className="text-sm text-white space-y-1">
                                                    <li>• Muy flexible</li>
                                                    <li>• Fácil modificar instrucciones</li>
                                                    <li>• Permite emular arquitecturas</li>
                                                </ul>
                                            </div>
                                            <div className="p-3 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20">
                                                <p className="text-sm font-semibold text-red-400 mb-1">❌ Desventajas:</p>
                                                <ul className="text-sm text-white space-y-1">
                                                    <li>• Más lento que hardware</li>
                                                    <li>• Requiere memoria adicional</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 6: Microprogramación en Detalle */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="microprogramacion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-orange)] text-white border-2 border-[var(--color-teal-3)]/30 shadow-lg">
                                <FileCode className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="Microprogramación en Detalle"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-6" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-3">Estructura de Microprograma</h3>
                                    <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm overflow-x-auto">
                                        <pre className="text-sm text-white font-mono">
{`Dirección | Señales de Control    | Próxima dirección
----------|----------------------|------------------
000       | MAR_in, Read         | 001
001       | PC_out, Y_in, ALU_add| 002
...`}
                                        </pre>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.15}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Microrramificaciones (μBr)" icon={<GitBranch className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Permiten cambiar el flujo del microprograma basado en condiciones
                                        </p>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                            <p className="text-sm font-semibold text-[var(--color-orange)] mb-2">Ejemplo para BRN:</p>
                                            <pre className="text-sm text-white">
{`Si N=1: saltar a dirección 24
Si N=0: continuar secuencia normal`}
                                            </pre>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Organización de Memoria de Control" icon={<Layers className="w-5 h-5" />}>
                                        <div className="space-y-3">
                                            <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20">
                                                <p className="text-sm text-white"><strong className="text-[var(--color-teal-2)]">Horizontal:</strong> 1 bit por señal (más flexible)</p>
                                            </div>
                                            <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                                <p className="text-sm text-white"><strong className="text-[var(--color-orange)]">Vertical:</strong> Señales codificadas (menos bits)</p>
                                            </div>
                                            <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/20">
                                                <p className="text-sm text-white"><strong className="text-[var(--color-teal-3)]">Híbrida:</strong> Combinación de ambas</p>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.25}>
                            <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-2)]/10 to-transparent border-[var(--color-teal-2)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-4">Flujo de Control</h3>
                                    <div className="p-6 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                        <pre className="text-center font-mono text-sm md:text-base text-black">
{`μPC → Memoria Control → Palabra Control → Señales → Dispositivos
     ↑
Secuenciador ← Condiciones/Flags`}
                                        </pre>
                                    </div>
                                    <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20">
                                        <h4 className="font-semibold text-[var(--color-orange)] mb-2">En Sistemas Modernos:</h4>
                                        <ul className="space-y-1 text-sm text-white">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-0.5 text-[var(--color-teal-2)]" />
                                                <span><strong>Procesadores RISC:</strong> Control principalmente por hardware</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-0.5 text-[var(--color-teal-2)]" />
                                                <span><strong>Procesadores CISC:</strong> Uso extensivo de microprogramación</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-0.5 text-[var(--color-teal-2)]" />
                                                <span><strong>Híbridos:</strong> Combinación según complejidad de instrucciones</span>
                                            </li>
                                        </ul>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Call to Action */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="informacion-adicional">
                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 text-center">
                            <SplitText 
                                text="¿Listo para continuar?"
                                tag="h3"
                                className="text-3xl font-bold text-[var(--color-teal)] mb-4"
                                delay={50}
                                splitType="words"
                            />
                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Continúa explorando la arquitectura de computadoras con los sistemas de memoria
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Link to="/memory_system">
                                    <Button size="lg" className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-orange)]/80 hover:from-[var(--color-orange)]/90 hover:to-[var(--color-orange)]/70 text-white shadow-lg">
                                        Siguiente Unidad
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </SectionContainer>
                </AnimatedContent>
            </div>
        </div>
    )
}
