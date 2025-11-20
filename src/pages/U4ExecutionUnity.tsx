import { Cpu, Calculator, Binary, Layers, ChevronRight, Zap, GitBranch, Plus, Minus, Activity, ArrowRight, Code2, Settings, Database, Sparkles, RotateCw, ArrowLeftRight, CheckCircle2, XCircle, Flag, Brain, BookOpen, Box, Share2 } from 'lucide-react';
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

export default function U4ExecutionUnity() {
    // Carousel items for execution unit components
    const executionUnitImages = [
        {
            title: 'ALU',
            description: 'Unidad Aritmético-Lógica',
            id: 1,
            icon: <Calculator className="w-8 h-8" />
        },
        {
            title: 'Registros',
            description: 'Almacenamiento temporal rápido',
            id: 2,
            icon: <Database className="w-8 h-8" />
        },
        {
            title: 'FPU',
            description: 'Unidad de Punto Flotante',
            id: 3,
            icon: <Binary className="w-8 h-8" />
        },
        {
            title: 'Desplazadores',
            description: 'Operaciones de bit shifting',
            id: 4,
            icon: <ArrowLeftRight className="w-8 h-8" />
        },
        {
            title: 'Flags de Estado',
            description: 'Banderas de resultado',
            id: 5,
            icon: <Flag className="w-8 h-8" />
        }
    ];

    // Stack images for execution unit visualization
    const stackImages = [
        { id: 1, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format' },
        { id: 2, img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=500&auto=format' },
        { id: 3, img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=500&auto=format' },
        { id: 4, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format' }
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
                            Unidad 4
                        </div>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ paddingBottom: '0.5rem' }}>
                            <TextType
                                text={['Unidad de Ejecución']}
                                typingSpeed={60}
                                loop={false}
                                showCursor={false}
                                className="text-black"
                            />
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={40} delay={0.8}>
                        <div className="text-center">
                            <BlurText 
                                text="El cerebro operativo del procesador: donde se realizan todos los cálculos y operaciones de procesamiento de datos."
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
                            items={executionUnitImages}
                            baseWidth={400}
                            autoplay={true}
                            autoplayDelay={4000}
                            pauseOnHover={true}
                            loop={true}
                        />
                    </div>
                </div>
            </AnimatedContent>

            {/* Stack Component */}
            <AnimatedContent direction="vertical" distance={60} delay={0.3}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="text-center mb-8">
                        <SplitText 
                            text="Componentes de la Unidad de Ejecución"
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
                {/* Section 4.1: What is the Execution Unit */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="que-es-unidad-ejecucion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-teal-2)]/30 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="4.1 ¿Qué es la Unidad de Ejecución?"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <p className="text-lg mb-4 text-white">
                                        La <strong className="text-[var(--color-teal-2)]">Unidad de Ejecución</strong> es el "cerebro operativo" del procesador, responsable de realizar todas las operaciones de cálculo y procesamiento de datos.
                                    </p>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.15}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="ALU" icon={<Calculator className="w-5 h-5" />}>
                                        <p className="text-white">
                                            <strong className="text-[var(--color-teal-2)]">Unidad Aritmético-Lógica:</strong> Realiza operaciones matemáticas (suma, resta, multiplicación, división) y lógicas (AND, OR, XOR, NOT)
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Registros" icon={<Database className="w-5 h-5" />}>
                                        <p className="text-white">
                                            <strong className="text-[var(--color-orange)]">Registros de Propósito General:</strong> Almacenan datos temporalmente durante el procesamiento para acceso ultrarrápido
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.25}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 124, 120, 0.3)">
                                    <InfoCard title="Circuitería" icon={<Settings className="w-5 h-5" />}>
                                        <p className="text-white">
                                            <strong className="text-[var(--color-teal-3)]">Circuitería adicional:</strong> FPU (Unidad de Punto Flotante), desplazadores de bits, y más
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 4.2: Data Representation */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="representacion-datos">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Binary className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="4.2 Representación de Datos"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-4 flex items-center gap-2">
                                        <Binary className="w-5 h-5" />
                                        Conceptos Fundamentales
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <ChevronRight className="w-5 h-5 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <div>
                                                <p className="text-white"><strong className="text-[var(--color-teal-2)]">Palabra:</strong> Cantidad de bits que el CPU procesa simultáneamente</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <ChevronRight className="w-5 h-5 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <div>
                                                <p className="text-white"><strong className="text-[var(--color-teal-2)]">Representación:</strong> Todos los datos se representan como patrones de bits</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <ChevronRight className="w-5 h-5 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <div>
                                                <p className="text-white"><strong className="text-[var(--color-teal-2)]">Sistema binario:</strong> Base 2 para representar números</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                        <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">📐 Valor en cualquier base:</p>
                                        <div className="font-mono text-base text-center py-3 bg-background/50 rounded">
                                            Valor = Σ (dígito × base<sup>i</sup>)
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />
                {/* Section 4.3: Signed Integer Representation */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="enteros-con-signo">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-3)]/30 shadow-lg">
                                <Plus className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="4.3 Representación de Enteros con Signo"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={25}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-gradient-to-br from-card/50 to-[var(--color-teal-3)]/5 backdrop-blur-sm p-6 mb-8">
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.3)">
                                        <AccordionItem value="sign-magnitude" className="border-[var(--color-teal-2)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-2)]/5 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white text-lg font-bold border-2 border-[var(--color-teal-2)]/50 shadow-lg">1</span>
                                                    <span className="font-bold">Signo-Magnitud</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="space-y-4">
                                                        <p className="text-white">
                                                            El <strong className="text-[var(--color-teal-3)]">bit más significativo (MSB)</strong> representa el signo: 0 = positivo, 1 = negativo. El resto de bits representa la magnitud del número.
                                                        </p>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">📊 Ejemplo (8 bits):</p>
                                                            <div className="space-y-2 font-mono text-sm">
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">00000101</span>
                                                                    <span className="text-[var(--color-teal-2)]">= +5</span>
                                                                </div>
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">10000101</span>
                                                                    <span className="text-[var(--color-orange)]">= -5</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <AnimatedList 
                                                            items={[
                                                                '⚠️ Problema: Dos ceros (+0 y -0)',
                                                                '📏 Rango: [-(2ⁿ⁻¹ - 1), +(2ⁿ⁻¹ - 1)]'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>

                                    <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.3)">
                                        <AccordionItem value="ones-complement" className="border-[var(--color-orange)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white text-lg font-bold border-2 border-[var(--color-orange)]/50 shadow-lg">2</span>
                                                    <span className="font-bold">Complemento a 1</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="space-y-4">
                                                        <p className="text-white">
                                                            Se obtiene <strong className="text-[var(--color-orange)]">invirtiendo todos los bits</strong> del número positivo para obtener el negativo.
                                                        </p>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">📊 Ejemplo:</p>
                                                            <div className="space-y-2 font-mono text-sm">
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">00000101</span>
                                                                    <span className="text-[var(--color-teal-2)]">= +5</span>
                                                                </div>
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">11111010</span>
                                                                    <span className="text-[var(--color-orange)]">= -5</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <AnimatedList 
                                                            items={[
                                                                '⚠️ Problema: Sigue teniendo dos ceros',
                                                                '➕ Operaciones: Requiere sumar acarreo al resultado final'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>

                                    <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.35)">
                                        <AccordionItem value="twos-complement" className="border-[var(--color-teal)] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-teal)]/10 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-teal-3)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-1)] text-white text-lg font-bold border-2 border-[var(--color-teal)]/50 shadow-lg">3</span>
                                                    <span className="font-bold">Complemento a 2 ⭐ MÁS USADO</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="space-y-4">
                                                        <p className="text-white">
                                                            Es el <strong className="text-[var(--color-teal-2)]">complemento a 1 + 1</strong>. Este es el método <strong className="text-[var(--color-orange)]">más utilizado</strong> en computadoras modernas.
                                                        </p>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">📊 Ejemplo:</p>
                                                            <div className="space-y-2 font-mono text-sm">
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">00000101</span>
                                                                    <span className="text-[var(--color-teal-2)]">= +5</span>
                                                                </div>
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">11111011</span>
                                                                    <span className="text-[var(--color-orange)]">= -5</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal)]/20 to-transparent border border-[var(--color-teal)]/30">
                                                            <p className="text-sm font-semibold text-[var(--color-teal-2)] mb-2 flex items-center gap-2">
                                                                <Sparkles className="w-4 h-4" />
                                                                Técnica rápida:
                                                            </p>
                                                            <p className="text-sm text-white">
                                                                Leer de derecha a izquierda, mantener bits hasta el primer 1 (inclusive), luego invertir el resto.
                                                            </p>
                                                        </div>
                                                        <AnimatedList 
                                                            items={[
                                                                '✅ Ventaja: Solo un cero',
                                                                '✅ Operaciones: Más simples y eficientes',
                                                                '📏 Rango: [-2ⁿ⁻¹, +2ⁿ⁻¹ - 1]'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-teal)]/10 to-transparent border border-[var(--color-teal)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </SpotlightCard>

                                    <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.3)">
                                        <AccordionItem value="bias-m" className="border-[var(--color-orange)]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent">
                                            <AccordionTrigger className="text-lg hover:text-[var(--color-orange)] px-6 py-4 text-white">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white text-lg font-bold border-2 border-[var(--color-orange)]/50 shadow-lg">4</span>
                                                    <span className="font-bold">Exceso a M (Bias-m)</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="space-y-4">
                                                        <p className="text-white">
                                                            El número se representa como: <strong className="text-[var(--color-orange)]">Número = Valor - M</strong> (donde M = 2<sup>n-1</sup>)
                                                        </p>
                                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">📊 Ejemplo (4 bits, M=8):</p>
                                                            <div className="space-y-2 font-mono text-sm">
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">0000</span>
                                                                    <span className="text-[var(--color-orange)]">= -8</span>
                                                                </div>
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">1000</span>
                                                                    <span className="text-[var(--color-teal-2)]">= 0</span>
                                                                </div>
                                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                                    <span className="text-black">1111</span>
                                                                    <span className="text-[var(--color-teal-3)]">= +7</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <AnimatedList 
                                                            items={[
                                                                '✅ Ventaja: Ideal para comparaciones',
                                                                '🎯 Uso: Punto flotante (exponentes), comparaciones'
                                                            ]}
                                                            className="h-auto"
                                                            itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 rounded-lg p-3"
                                                            showGradients={false}
                                                            enableArrowNavigation={false}
                                                        />
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
                {/* Section 4.4: Other Representation Systems */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="otros-sistemas">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-1)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-1)]/30 shadow-lg">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="4.4 Otros Sistemas de Representación"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="BCD (Binary Coded Decimal)" icon={<Binary className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Usa <strong className="text-[var(--color-teal-2)]">4 bits por dígito decimal</strong>.
                                        </p>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">Ejemplo:</p>
                                            <div className="font-mono text-sm">
                                                <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                    <span className="text-black">0101 1000</span>
                                                    <span className="text-[var(--color-teal-2)]">= 58</span>
                                                </div>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.15} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Código Gray" icon={<Share2 className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Números consecutivos <strong className="text-[var(--color-orange)]">difieren en solo 1 bit</strong>.
                                        </p>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">Conversión:</p>
                                            <div className="font-mono text-xs text-center py-2 bg-background/50 rounded text-black">
                                                Gray = Binario XOR (Binario &gt;&gt; 1)
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                            <SpotlightCard spotlightColor="rgba(0, 124, 120, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-4 flex items-center gap-2">
                                        <Calculator className="w-5 h-5" />
                                        Punto Flotante (IEEE 754)
                                    </h3>
                                    <p className="text-white mb-4">
                                        Formato: <strong className="text-[var(--color-teal-2)]">(-1)<sup>s</sup> × Mantisa × 2<sup>(Exponente - Bias)</sup></strong>
                                    </p>
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                        <p className="text-sm font-semibold text-[var(--color-teal)] mb-3">Simple precisión (32 bits):</p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                <span className="text-black font-semibold">Bit de signo:</span>
                                                <span className="text-black">1 bit</span>
                                            </div>
                                            <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                <span className="text-black font-semibold">Exponente:</span>
                                                <span className="text-black">8 bits (Exceso 127)</span>
                                            </div>
                                            <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                                                <span className="text-black font-semibold">Mantisa:</span>
                                                <span className="text-black">23 bits</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 p-3 rounded bg-gradient-to-r from-[var(--color-teal-2)]/20 to-transparent border border-[var(--color-teal-2)]/30">
                                            <p className="text-xs font-semibold text-[var(--color-teal-2)] mb-1">Ejemplo: 0.15625 =</p>
                                            <div className="font-mono text-xs break-all text-black">
                                                0 01111100 01000000000000000000000
                                            </div>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.25}>
                            <div className="mt-6 grid md:grid-cols-2 gap-6">
                                <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.25)">
                                    <InfoCard title="Caracteres ASCII" icon={<BookOpen className="w-5 h-5" />}>
                                        <p className="text-white">
                                            <strong className="text-[var(--color-orange)]">7-8 bits</strong> por carácter. Estándar básico para texto en inglés.
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                                <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.25)">
                                    <InfoCard title="Unicode" icon={<BookOpen className="w-5 h-5" />}>
                                        <p className="text-white">
                                            <strong className="text-[var(--color-teal-2)]">16+ bits</strong> por carácter. Soporta idiomas de todo el mundo.
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </div>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />
                {/* Section 4.5: ALU */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="alu">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Calculator className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="4.5 Unidad Aritmético-Lógica (ALU)"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-2xl font-semibold text-[var(--color-teal-2)] mb-4">Componentes Principales de la ALU</h3>
                                    <p className="text-base mb-4 text-white">
                                        La ALU es el corazón computacional de la CPU, dividida en dos unidades principales:
                                    </p>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.15}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Unidad Aritmética" icon={<Plus className="w-5 h-5" />}>
                                        <h4 className="font-semibold text-[var(--color-teal-3)] mb-3">Sumador Completo (1 bit):</h4>
                                        <div className="space-y-3 text-sm text-white">
                                            <div>
                                                <p className="font-semibold mb-1">Entradas:</p>
                                                <ul className="space-y-1 ml-4">
                                                    <li>• A, B, Carry-in</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold mb-1">Salidas:</p>
                                                <ul className="space-y-1 ml-4">
                                                    <li>• Suma, Carry-out</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-xs font-semibold text-[var(--color-teal)] mb-2">Ecuaciones lógicas:</p>
                                            <div className="font-mono text-xs space-y-1 text-black">
                                                <div>Suma = A ⊕ B ⊕ Carry-in</div>
                                                <div className="text-xs">Carry-out = (A ∧ B) ∨ (A ∧ Cᵢₙ) ∨ (B ∧ Cᵢₙ)</div>
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Unidad Lógica" icon={<GitBranch className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Implementa operaciones lógicas y de desplazamiento de bits.
                                        </p>
                                        <AnimatedList 
                                            items={[
                                                '🔀 AND - Conjunción lógica',
                                                '🔀 OR - Disyunción lógica',
                                                '🔀 XOR - OR exclusivo',
                                                '🔀 NOT - Negación',
                                                '↔️ Desplazamientos de bits'
                                            ]}
                                            className="h-auto"
                                            itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 rounded-lg p-3 text-sm"
                                            showGradients={false}
                                            enableArrowNavigation={false}
                                        />
                                        <div className="mt-4 p-3 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-xs text-black">
                                                <strong>Implementación:</strong> Multiplexores seleccionan la operación deseada
                                            </p>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.25}>
                            <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5" />
                                        Sumador con Anticipación de Acarreo (CLA)
                                    </h3>
                                    <p className="text-white mb-4">
                                        El problema del <strong className="text-[var(--color-orange)]">sumador propagado</strong> es que es muy lento (33t para 16 bits). La solución es el <strong className="text-[var(--color-teal-2)]">Carry Lookahead Adder (CLA)</strong>.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">Funciones:</p>
                                            <div className="space-y-2 text-sm">
                                                <div className="font-mono text-xs text-black">
                                                    <strong>Generación (G):</strong> Gᵢ = Aᵢ ∧ Bᵢ
                                                </div>
                                                <div className="font-mono text-xs text-black">
                                                    <strong>Propagación (P):</strong> Pᵢ = Aᵢ ∨ Bᵢ
                                                </div>
                                                <div className="font-mono text-xs text-black">
                                                    <strong>Acarreos:</strong> Cᵢ₊₁ = Gᵢ ∨ (Pᵢ ∧ Cᵢ)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal)]/20 to-transparent border border-[var(--color-teal)]/30">
                                            <p className="text-sm font-semibold text-[var(--color-teal-2)] mb-2 flex items-center gap-2">
                                                <Sparkles className="w-4 h-4" />
                                                Ventaja principal:
                                            </p>
                                            <p className="text-sm text-white">
                                                Calcula todos los acarreos <strong className="text-[var(--color-teal-2)]">simultáneamente</strong>, logrando tiempo constante independiente del número de bits.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/30">
                                        <p className="text-sm font-semibold text-[var(--color-orange)] mb-2">ALU Completa Integrada:</p>
                                        <div className="font-mono text-xs text-center py-3 bg-background/50 rounded text-black">
                                            [Entrada A] → [Unidad Aritmética] → [Multiplexor] → [Salida]<br/>
                                            [Entrada B] → [Unidad Lógica] ↗<br/>
                                            [Selector Operación] ↗
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />
                {/* Section 4.6: Registers */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="registros">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-3)] to-[var(--color-teal-2)] text-white border-2 border-[var(--color-teal-3)]/30 shadow-lg">
                                <Database className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="4.6 Registros de Propósito General"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-6" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-3">Función</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-white">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Almacenar datos temporalmente durante el procesamiento</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-white">
                                            <ChevronRight className="w-4 h-4 mt-1 text-[var(--color-orange)] flex-shrink-0" />
                                            <span>Realizar operaciones a nivel de bits</span>
                                        </li>
                                    </ul>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.15}>
                            <div className="rounded-2xl border border-[var(--color-teal-3)]/30 bg-gradient-to-br from-card/50 to-[var(--color-teal-3)]/5 backdrop-blur-sm p-6 mb-8">
                                <h3 className="text-2xl font-semibold text-[var(--color-teal-2)] mb-6">Tipos de Desplazamientos</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <ArrowLeftRight className="w-5 h-5 text-[var(--color-teal-2)]" />
                                            <h4 className="font-semibold text-[var(--color-teal)]">Desplazamiento Lógico</h4>
                                        </div>
                                        <div className="space-y-2 text-sm text-white">
                                            <div>
                                                <strong>Izquierda (&lt;&lt;):</strong> rellena con 0
                                            </div>
                                            <div>
                                                <strong>Derecha (&gt;&gt;):</strong> rellena con 0
                                            </div>
                                            <div className="mt-2 p-2 bg-[var(--color-teal-2)]/10 rounded text-xs">
                                                Equivale a multiplicar/dividir por 2
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <ArrowRight className="w-5 h-5 text-[var(--color-orange)]" />
                                            <h4 className="font-semibold text-[var(--color-teal)]">Desplazamiento Aritmético</h4>
                                        </div>
                                        <div className="space-y-2 text-sm text-white">
                                            <div>
                                                <strong>Derecha:</strong> Mantiene bit de signo
                                            </div>
                                            <div>
                                                Rellena con MSB (bit más significativo)
                                            </div>
                                            <div className="mt-2 p-2 bg-[var(--color-orange)]/10 rounded text-xs">
                                                Preserva el signo en números con signo
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--color-teal-3)]/10 to-transparent border border-[var(--color-teal-3)]/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <RotateCw className="w-5 h-5 text-[var(--color-teal-3)]" />
                                            <h4 className="font-semibold text-[var(--color-teal)]">Rotación</h4>
                                        </div>
                                        <div className="space-y-2 text-sm text-white">
                                            <div>
                                                <strong>Simple:</strong> Bits que salen entran por el otro lado
                                            </div>
                                            <div>
                                                <strong>Con acarreo:</strong> Incluye el flag de acarreo
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                            <SpotlightCard spotlightColor="rgba(255, 89, 0, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border-[var(--color-orange)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-orange)] mb-3">Implementación de Registros</h3>
                                    <AnimatedList 
                                        items={[
                                            '🔧 Base: Flip-Flops tipo D',
                                            '🎛️ Control: Multiplexores para seleccionar operación',
                                            '✨ Capacidades: Carga, desplazamiento, rotación'
                                        ]}
                                        className="h-auto"
                                        itemClassName="bg-gradient-to-r from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/20 rounded-lg p-3"
                                        showGradients={false}
                                        enableArrowNavigation={false}
                                    />
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                {/* Section 4.7: Complex Operations & Flags */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="operaciones-complejas">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Activity className="w-6 h-6" />
                            </div>
                            <BlurText 
                                text="4.7 Operaciones Complejas y Flags"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                animateBy="words"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Multiplicación" icon={<Sparkles className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Implementada mediante <strong className="text-[var(--color-teal-2)]">sumas y desplazamientos sucesivos</strong>
                                        </p>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                            <p className="text-sm font-semibold text-[var(--color-teal)] mb-2">Ejemplo:</p>
                                            <div className="font-mono text-sm text-black">
                                                5 × 3 = 5 + 10 (5 desplazado izquierda)
                                            </div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.15} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="División" icon={<Minus className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">
                                            Implementada mediante <strong className="text-[var(--color-orange)]">restas y desplazamientos</strong>
                                        </p>
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border border-[var(--color-orange)]/30">
                                            <p className="text-sm text-white">
                                                Más compleja que la multiplicación
                                            </p>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                            <SpotlightCard spotlightColor="rgba(0, 124, 120, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-4 flex items-center gap-2">
                                        <Flag className="w-5 h-5" />
                                        Flags (Banderas) de Estado
                                    </h3>
                                    <p className="text-white mb-4">
                                        La ALU actualiza flags que indican el resultado de operaciones:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-2)]/20 to-[var(--color-teal-2)]/10 border border-[var(--color-teal-2)]/30 shadow-md">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-teal-2)] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Carry (C)</p>
                                                <p className="text-sm text-white">Acarreo en operación sin signo</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/20 to-[var(--color-orange)]/10 border border-[var(--color-orange)]/30 shadow-md">
                                            <Box className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Zero (Z)</p>
                                                <p className="text-sm text-white">Resultado fue cero</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-teal-3)]/20 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 shadow-md">
                                            <Plus className="w-5 h-5 text-[var(--color-teal-3)] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Sign (S/N)</p>
                                                <p className="text-sm text-white">Bit de signo del resultado</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[var(--color-orange)]/20 to-[var(--color-orange)]/10 border border-[var(--color-orange)]/30 shadow-md">
                                            <XCircle className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-[var(--color-teal)]">Overflow (V)</p>
                                                <p className="text-sm text-white">Desbordamiento en operación con signo</p>
                                            </div>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />
                {/* Section 4.8: Summary */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="resumen">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-1)] text-white border-2 border-[var(--color-teal)]/30 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <SplitText 
                                text="4.8 Resumen de la Unidad de Ejecución"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={30}
                                splitType="chars"
                                textAlign="left"
                            />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-4">Flujo de Datos</h3>
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30">
                                        <div className="font-mono text-lg text-center py-3 bg-background/50 rounded text-black">
                                            Registros → ALU → Flags → Registros/Memoria
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.15}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Ancho de Palabra" icon={<Binary className="w-5 h-5" />}>
                                        <p className="text-white">
                                            Determina la <strong className="text-[var(--color-teal-2)]">cantidad de bits procesados</strong> simultáneamente
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard title="Velocidad de ALU" icon={<Zap className="w-5 h-5" />}>
                                        <p className="text-white">
                                            Depende del <strong className="text-[var(--color-orange)]">diseño</strong> (CLA vs propagado)
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.25}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 124, 120, 0.3)">
                                    <InfoCard title="Cantidad de Registros" icon={<Database className="w-5 h-5" />}>
                                        <p className="text-white">
                                            Afecta la <strong className="text-[var(--color-teal-3)]">eficiencia</strong> al reducir accesos a memoria
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.3}>
                            <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border-[var(--color-orange)]/30">
                                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#FFA500' }}>
                                        <Sparkles className="w-5 h-5" />
                                        Aplicaciones Específicas
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-2)]/15 to-transparent border border-[var(--color-teal-2)]/30 shadow-md">
                                            <h4 className="font-semibold text-[var(--color-teal-3)] mb-2">🔢 Enteros</h4>
                                            <p className="text-sm text-white">Complemento a 2</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-orange)]/15 to-transparent border border-[var(--color-orange)]/30 shadow-md">
                                            <h4 className="font-semibold text-[var(--color-orange)] mb-2">⚖️ Comparaciones</h4>
                                            <p className="text-sm text-white">Exceso a M</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal-3)]/15 to-transparent border border-[var(--color-teal-3)]/30 shadow-md">
                                            <h4 className="font-semibold text-[var(--color-teal-3)] mb-2">🔬 Cálculos Científicos</h4>
                                            <p className="text-sm text-white">Punto flotante IEEE 754</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-[var(--color-teal)]/15 to-transparent border border-[var(--color-teal)]/30 shadow-md">
                                            <h4 className="font-semibold text-[var(--color-teal)] mb-2">⚡ Operaciones Rápidas</h4>
                                            <p className="text-sm text-white">Desplazamientos en lugar de multiplicaciones</p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        {/* Call to Action */}
                        <AnimatedContent direction="vertical" distance={40} delay={0.4}>
                            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 text-center">
                                <SplitText 
                                    text="¡Has completado la Unidad de Ejecución!"
                                    tag="h3"
                                    className="text-3xl font-bold text-[var(--color-teal)] mb-4"
                                    delay={50}
                                    splitType="words"
                                />
                                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Ahora comprendes cómo el procesador realiza todas las operaciones de cálculo y procesamiento de datos
                                </p>
                                <div className="flex justify-center gap-4 flex-wrap">
                                    <Link to="/">
                                        <Button size="lg" className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-orange)]/80 hover:from-[var(--color-orange)]/90 hover:to-[var(--color-orange)]/70 text-white shadow-lg">
                                            <ArrowRight className="w-5 h-5 mr-2" />
                                            Continuar Aprendiendo
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>
            </div>
        </div>
    );
}
