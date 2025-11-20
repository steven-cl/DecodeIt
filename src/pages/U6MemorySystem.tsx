import { Database, Layers, HardDrive, Cpu, Zap, ChevronRight, MemoryStick, Server, Activity, Binary, Clock, ArrowRight, Sparkles, Brain, BookOpen, TrendingUp, Shield, Box, Workflow } from 'lucide-react';
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

export default function U6MemorySystem() {
    const memoryHierarchyImages = [
        { title: 'Registros CPU', description: 'Memoria más rápida y cercana', id: 1, icon: <Cpu className="w-8 h-8" /> },
        { title: 'Memoria Caché', description: 'El atajo inteligente', id: 2, icon: <Zap className="w-8 h-8" /> },
        { title: 'Memoria RAM', description: 'Memoria principal del sistema', id: 3, icon: <MemoryStick className="w-8 h-8" /> },
        { title: 'Almacenamiento', description: 'Discos duros y SSD', id: 4, icon: <HardDrive className="w-8 h-8" /> },
        { title: 'Jerarquía Completa', description: 'Del más rápido al más lento', id: 5, icon: <Layers className="w-8 h-8" /> }
    ];

    const stackImages = [
        { id: 1, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=500&auto=format' },
        { id: 2, img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=500&auto=format' },
        { id: 3, img: 'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=500&auto=format' },
        { id: 4, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-[var(--color-teal-3)]/5 to-background">
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/15 to-[var(--color-teal-3)]/10 px-8 py-20 mb-12">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-5xl mx-auto">
                    <AnimatedContent direction="vertical" distance={50} delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-6 border border-[var(--color-orange)]/30 shadow-lg">
                            <Database className="w-4 h-4" />
                            Unidad 6
                        </div>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ paddingBottom: '0.5rem' }}>
                            <TextType text={['Sistema de Memoria']} typingSpeed={40} loop={false} showCursor={false} className="text-black" />
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent direction="vertical" distance={40} delay={0.8}>
                        <div className="text-center">
                            <BlurText text="La biblioteca de la computadora: donde se almacenan programas y datos, desde los registros ultrarrápidos hasta los discos de gran capacidad." className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" delay={30} animateBy="words" />
                        </div>
                    </AnimatedContent>
                </div>
            </div>

            <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="flex justify-center">
                        <Carousel items={memoryHierarchyImages} baseWidth={400} autoplay={true} autoplayDelay={4000} pauseOnHover={true} loop={true} />
                    </div>
                </div>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={60} delay={0.3}>
                <div className="max-w-5xl mx-auto px-8 mb-16">
                    <div className="text-center mb-8">
                        <SplitText text="Jerarquía de Memoria" tag="h2" className="text-3xl font-bold text-[var(--color-teal)]" delay={50} splitType="chars" />
                    </div>
                    <div className="flex justify-center">
                        <Stack cardsData={stackImages} cardDimensions={{ width: 300, height: 300 }} randomRotation={true} sensitivity={150} />
                    </div>
                </div>
            </AnimatedContent>

            <div className="max-w-5xl mx-auto px-8 pb-16">
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="funcion-almacenamiento">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-teal-2)]/30 shadow-lg">
                                <Database className="w-6 h-6" />
                            </div>
                            <SplitText text="¿Qué es la Función de Almacenamiento?" tag="h2" className="text-4xl font-bold text-[var(--color-teal)]" delay={30} splitType="chars" textAlign="left" />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard className="mb-8" spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/20 to-[var(--color-teal-2)]/10 border-[var(--color-teal-3)]/30">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center">
                                            <span className="text-2xl">📚</span>
                                        </div>
                                        <div>
                                            <p className="text-base text-white">
                                                El sistema de memoria es como la <strong className="text-[var(--color-teal-2)]">"biblioteca"</strong> de la computadora, donde se almacenan todos los programas y datos para su uso por el CPU.
                                            </p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                <Separator className="my-12 bg-[var(--color-teal-3)]/20" />

                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="resumen">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-teal-3)] text-white border-2 border-[var(--color-orange)]/30 shadow-lg">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <SplitText text="Sistema de Memoria Completo" tag="h2" className="text-4xl font-bold text-[var(--color-teal)]" delay={35} splitType="words" textAlign="left" />
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                            <SpotlightCard spotlightColor="rgba(0, 186, 180, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/15 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                    <h3 className="text-xl font-semibold text-[var(--color-teal-3)] mb-4">Puntos Clave del Sistema de Memoria</h3>
                                    <AnimatedList 
                                        items={[
                                            '📚 Jerarquía: Registros → Caché → RAM → Almacenamiento secundario',
                                            '⚡ Principio: Más cerca del CPU = más rápido, más caro, menor capacidad',
                                            '🎯 Caché: Memoria ultra-rápida con principios de localidad temporal y espacial',
                                            '🔄 Correspondencia: Directa (simple), Asociativa (flexible), Por Conjuntos (óptima)',
                                            '♻️ Sustitución: LRU (más efectivo), FIFO, LFU, Aleatorio',
                                            '✍️ Escritura: Write-Through (coherente) vs Write-Back (eficiente)',
                                            '🚀 Rendimiento: 90-99% de aciertos en caché es crucial para alto rendimiento'
                                        ]}
                                        className="h-auto"
                                        itemClassName="bg-gradient-to-r from-[var(--color-teal-2)]/10 to-transparent border border-[var(--color-teal-2)]/20 rounded-lg p-3"
                                        showGradients={false}
                                        enableArrowNavigation={false}
                                    />
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>

                        <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/10 to-[var(--color-teal-3)]/10 border border-[var(--color-teal-3)]/30 text-center">
                                <SplitText text="¿Listo para continuar?" tag="h3" className="text-3xl font-bold text-[var(--color-teal)] mb-4" delay={50} splitType="words" />
                                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Explora más sobre arquitectura de computadoras en las siguientes unidades
                                </p>
                                <div className="flex justify-center gap-4 flex-wrap">
                                    <Link to="/input_output_system">
                                        <Button size="lg" className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-orange)]/80 hover:from-[var(--color-orange)]/90 hover:to-[var(--color-orange)]/70 text-white shadow-lg">
                                            <ArrowRight className="w-5 h-5" />
                                            Siguiente Unidad
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>
            </div>
        </div>
    )
}
