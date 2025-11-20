import { Code, Binary, Layers, Database, Cpu, ChevronRight, BookOpen, Zap, ArrowRight, ListOrdered, Hash, CircuitBoard, FileCode, Target, Workflow, BoxSelect, GitBranch, MousePointer, Brain, Sparkles, Clock, Table } from 'lucide-react';
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

export default function U3InstructionsDesign() {
    const instructionConcepts = [
        { title: 'Código de Operación', description: 'Define qué operación ejecutar', id: 1, icon: <Code className="w-8 h-8" /> },
        { title: 'Direccionamiento', description: 'Cómo acceder a los operandos', id: 2, icon: <Target className="w-8 h-8" /> },
        { title: 'Formato de Instrucción', description: 'Estructura de bits', id: 3, icon: <Binary className="w-8 h-8" /> },
        { title: 'Conjunto de Instrucciones', description: 'Repertorio completo del CPU', id: 4, icon: <ListOrdered className="w-8 h-8" /> },
        { title: 'Codificación', description: 'Representación en bits', id: 5, icon: <Hash className="w-8 h-8" /> }
    ];

    const stackImages = [
        { id: 1, img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format' },
        { id: 2, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format' },
        { id: 3, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format' },
        { id: 4, img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=500&auto=format' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-[var(--color-teal-3)]/5 to-background">
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/15 to-[var(--color-teal-3)]/10 px-8 py-20 mb-12">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-5xl mx-auto">
                    <AnimatedContent direction="vertical" distance={50} delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-6 border border-[var(--color-orange)]/30 shadow-lg">
                            <FileCode className="w-4 h-4" />
                            Unidad 3
                        </div>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ paddingBottom: '0.5rem' }}>
                            <TextType text={['Diseño del Conjunto de Instrucciones']} typingSpeed={40} loop={false} showCursor={false} className="text-black" />
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={40} delay={0.8}>
                        <div className="text-center">
                            <BlurText text="Explora cómo se diseñan y codifican las instrucciones que dan vida a las computadoras, desde los códigos de operación hasta los modos de direccionamiento." className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" delay={30} animateBy="words" />
                        </div>
                    </AnimatedContent>
                </div>
            </div>
            <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="flex justify-center">
                        <Carousel items={instructionConcepts} baseWidth={400} autoplay={true} autoplayDelay={4000} pauseOnHover={true} loop={true} />
                    </div>
                </div>
            </AnimatedContent>
            <AnimatedContent direction="vertical" distance={60} delay={0.3}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="text-center mb-8">
                        <SplitText text="Componentes del Diseño" tag="h2" className="text-3xl font-bold text-[var(--color-teal)]" delay={50} splitType="chars" />
                    </div>
                    <div className="flex justify-center">
                        <Stack cardsData={stackImages} cardDimensions={{ width: 300, height: 300 }} randomRotation={true} sensitivity={150} />
                    </div>
                </div>
            </AnimatedContent>
            <div className="max-w-5xl mx-auto px-8 pb-16">
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="conjunto-instrucciones">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-teal-2)]/30 shadow-lg">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <SplitText text="3.1 ¿Qué es un Conjunto de Instrucciones?" tag="h2" className="text-4xl font-bold text-[var(--color-teal)]" delay={30} splitType="chars" textAlign="left" />
                        </div>
                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center"><span className="text-2xl">💡</span></div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[var(--color-teal-2)] mb-2">Concepto Fundamental</h3>
                                            <p className="text-base text-white">El <strong className="text-[var(--color-teal-2)]">Conjunto de Instrucciones</strong> es el repertorio completo de operaciones que un procesador puede entender y ejecutar. Es como el "vocabulario" del CPU.</p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>
                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="estructura-instruccion">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70 text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <Layers className="w-6 h-6" />
                            </div>
                            <BlurText text="3.2 Estructura de una Instrucción" className="text-4xl font-bold text-[var(--color-teal)]" delay={30} animateBy="words" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard title="Formato de Instrucción" icon={<BoxSelect className="w-5 h-5" />}>
                                        <p className="mb-3 text-white">Las instrucciones se organizan en <strong className="text-[var(--color-teal-2)]">campos de bits</strong></p>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-muted/70 to-muted/30 border border-border/30 font-mono text-sm mb-4">
                                            <div className="text-center text-black">[ CO ] [ DIR 1 ] [ DIR 2 ]...</div>
                                        </div>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>
                    </SectionContainer>
                </AnimatedContent>
            </div>
        </div>
    );
}
