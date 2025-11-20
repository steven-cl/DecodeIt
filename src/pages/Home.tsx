import { Book, Code2, Cpu, Layers, Zap, ArrowRight, Binary, CircuitBoard, Microchip, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SplitText from '@/components/SplitText';
import BlurText from '@/components/BlurText';
import AnimatedContent from '@/components/AnimatedContent';
import InfoCard from '@/layouts/InfoCard';
import SectionContainer from '@/layouts/SectionContainer';
import SpotlightCard from '@/components/SpotlightCard';
import Carousel from '@/components/Carousel';
import { Link } from 'react-router-dom';
import DecodeIcon from '@/assets/DecodeIt.png';

function Home() {
    // Feature carousel items
    const features = [
        {
            title: 'Arquitectura de Computadoras',
            description: 'Aprende los fundamentos',
            id: 1,
            icon: <CircuitBoard className="w-8 h-8" />
        },
        {
            title: 'Organización del CPU',
            description: 'Comprende el procesador',
            id: 2,
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: 'Sistemas de Memoria',
            description: 'Explora la jerarquía',
            id: 3,
            icon: <Database className="w-8 h-8" />
        },
        {
            title: 'Diseño de Instrucciones',
            description: 'Domina el set de instrucciones',
            id: 4,
            icon: <Code2 className="w-8 h-8" />
        },
        {
            title: 'Entrada y Salida',
            description: 'Sistemas I/O modernos',
            id: 5,
            icon: <Binary className="w-8 h-8" />
        }
    ];

    // Topic cards for navigation
    const topics = [
        {
            title: 'Introducción',
            description: 'Fundamentos de arquitectura y organización de computadoras',
            icon: <Book className="w-6 h-6" />,
            link: '/machine_organization_and_architecture_introduction',
            color: 'teal'
        },
        {
            title: 'CPU',
            description: 'Organización y funcionamiento del procesador',
            icon: <Cpu className="w-6 h-6" />,
            link: '/cpu_organization',
            color: 'orange'
        },
        {
            title: 'Instrucciones',
            description: 'Diseño del conjunto de instrucciones',
            icon: <Code2 className="w-6 h-6" />,
            link: '/design_of_instructions_set',
            color: 'teal'
        },
        {
            title: 'Memoria',
            description: 'Sistema de memoria y jerarquía',
            icon: <Database className="w-6 h-6" />,
            link: '/memory_system',
            color: 'orange'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-[var(--color-teal-3)]/5 to-background">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-orange)]/10 via-[var(--color-teal-2)]/15 to-[var(--color-teal-3)]/10 px-8 py-24 mb-16">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-6xl mx-auto">
                    <AnimatedContent direction="vertical" distance={50} delay={0.1}>
                        <div className="flex justify-center mb-8">
                            <img 
                                src={DecodeIcon} 
                                alt="DecodeIt Logo" 
                                className="h-24 w-32 object-contain animate-pulse"
                            />
                        </div>
                    </AnimatedContent>
                    
                    <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                        <div className="text-center mb-8">
                            <h1 className="text-6xl md:text-8xl font-bold mb-6">
                                <SplitText
                                    text="DecodeIt"
                                    tag="span"
                                    className="text-black"
                                    delay={50}
                                    splitType="chars"
                                />
                            </h1>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent direction="vertical" distance={40} delay={0.6}>
                        <div className="text-center max-w-4xl mx-auto">
                            <BlurText 
                                text="Tu plataforma interactiva para dominar la Arquitectura y Organización de Computadoras"
                                className="text-2xl md:text-3xl text-muted-foreground font-semibold leading-relaxed"
                                delay={40}
                                animateBy="words"
                            />
                        </div>
                    </AnimatedContent>

                    <AnimatedContent direction="vertical" distance={30} delay={1}>
                        <div className="text-center mt-12">
                            <BlurText 
                                text="Explora los conceptos fundamentales de cómo funcionan las computadoras modernas, desde los componentes básicos hasta los sistemas complejos que hacen posible la tecnología actual."
                                className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                                delay={20}
                                animateBy="words"
                            />
                        </div>
                    </AnimatedContent>
                </div>
            </div>

            {/* Features Carousel */}
            <AnimatedContent direction="vertical" distance={60} delay={0.2}>
                <div className="max-w-6xl mx-auto px-8 mb-20">
                    <div className="text-center mb-12">
                        <SplitText 
                            text="Contenido del Curso"
                            tag="h2"
                            className="text-4xl font-bold text-[var(--color-teal)]"
                            delay={40}
                            splitType="words"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Carousel 
                            items={features}
                            baseWidth={400}
                            autoplay={true}
                            autoplayDelay={4000}
                            pauseOnHover={true}
                            loop={true}
                        />
                    </div>
                </div>
            </AnimatedContent>

            <div className="max-w-6xl mx-auto px-8 pb-20">
                {/* What is DecodeIt Section */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="about">
                        <div className="text-center mb-12">
                            <SplitText 
                                text="¿Qué es DecodeIt?"
                                tag="h2"
                                className="text-5xl font-bold text-[var(--color-teal)]"
                                delay={35}
                                splitType="chars"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <AnimatedContent direction="horizontal" distance={60} delay={0.1}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(0, 186, 180, 0.3)">
                                    <InfoCard 
                                        title="Aprendizaje Interactivo" 
                                        icon={<Layers className="w-5 h-5" />}
                                        className="h-full"
                                    >
                                        <p className="text-white mb-3">
                                            DecodeIt es una plataforma educativa diseñada para hacer el aprendizaje de la arquitectura de computadoras <strong className="text-[var(--color-teal-2)]">más accesible y visual</strong>.
                                        </p>
                                        <p className="text-white">
                                            Utilizamos animaciones, componentes interactivos y explicaciones claras para que comprendas conceptos complejos de manera intuitiva.
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>

                            <AnimatedContent direction="horizontal" distance={60} delay={0.2} reverse={true}>
                                <SpotlightCard className="h-full" spotlightColor="rgba(255, 89, 0, 0.3)">
                                    <InfoCard 
                                        title="Contenido Estructurado" 
                                        icon={<Microchip className="w-5 h-5" />}
                                        className="h-full"
                                    >
                                        <p className="text-white mb-3">
                                            Nuestro contenido está organizado en <strong className="text-[var(--color-orange)]">unidades temáticas progresivas</strong> que cubren todos los aspectos fundamentales.
                                        </p>
                                        <p className="text-white">
                                            Desde la introducción básica hasta temas avanzados como sistemas de memoria y entrada/salida.
                                        </p>
                                    </InfoCard>
                                </SpotlightCard>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent direction="vertical" distance={40} delay={0.3}>
                            <SpotlightCard spotlightColor="rgba(0, 124, 120, 0.25)">
                                <InfoCard className="bg-gradient-to-br from-[var(--color-teal-3)]/10 to-[var(--color-teal-2)]/5 border-[var(--color-teal-3)]/30">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)] flex items-center justify-center shadow-xl">
                                                <Zap className="w-10 h-10 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-[var(--color-teal-2)] mb-3">
                                                Aprendizaje Moderno
                                            </h3>
                                            <p className="text-white text-lg">
                                                Combina teoría sólida con visualizaciones dinámicas, ejemplos prácticos y recursos multimedia para una experiencia de aprendizaje completa y efectiva.
                                            </p>
                                        </div>
                                    </div>
                                </InfoCard>
                            </SpotlightCard>
                        </AnimatedContent>
                    </SectionContainer>
                </AnimatedContent>

                {/* Topics Grid Section */}
                <AnimatedContent direction="vertical" distance={60}>
                    <SectionContainer id="topics">
                        <div className="text-center mb-12">
                            <SplitText 
                                text="Explora Nuestros Temas"
                                tag="h2"
                                className="text-4xl font-bold text-[var(--color-teal)]"
                                delay={35}
                                splitType="words"
                            />
                            <BlurText 
                                text="Selecciona un tema para comenzar tu aprendizaje"
                                className="text-lg text-muted-foreground mt-4"
                                delay={25}
                                animateBy="words"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {topics.map((topic, index) => (
                                <AnimatedContent 
                                    key={topic.title}
                                    direction="vertical" 
                                    distance={40} 
                                    delay={0.1 + index * 0.1}
                                >
                                    <Link to={topic.link}>
                                        <SpotlightCard 
                                            className="h-full cursor-pointer"
                                            spotlightColor={topic.color === 'orange' ? "rgba(255, 89, 0, 0.3)" : "rgba(0, 186, 180, 0.3)"}
                                        >
                                            <div className={`p-6 rounded-2xl border h-full transition-all duration-300 hover:scale-105 ${
                                                topic.color === 'orange' 
                                                    ? 'bg-gradient-to-br from-[var(--color-orange)]/10 to-transparent border-[var(--color-orange)]/30' 
                                                    : 'bg-gradient-to-br from-[var(--color-teal-3)]/10 to-transparent border-[var(--color-teal-3)]/30'
                                            }`}>
                                                <div className="flex items-start gap-4">
                                                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl shadow-lg ${
                                                        topic.color === 'orange'
                                                            ? 'bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange)]/70'
                                                            : 'bg-gradient-to-br from-[var(--color-teal-2)] to-[var(--color-teal-3)]'
                                                    } text-white`}>
                                                        {topic.icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className={`text-2xl font-bold mb-2 ${
                                                            topic.color === 'orange' ? 'text-[var(--color-orange)]' : 'text-[var(--color-teal)]'
                                                        }`}>
                                                            {topic.title}
                                                        </h3>
                                                        <p className="text-muted-foreground">
                                                            {topic.description}
                                                        </p>
                                                    </div>
                                                    <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${
                                                        topic.color === 'orange' ? 'text-[var(--color-orange)]' : 'text-[var(--color-teal)]'
                                                    }`} />
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </Link>
                                </AnimatedContent>
                            ))}
                        </div>
                    </SectionContainer>
                </AnimatedContent>

                {/* Call to Action */}
                <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                    <div className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-[var(--color-orange)]/15 via-[var(--color-teal-2)]/15 to-[var(--color-teal-3)]/15 border border-[var(--color-teal-3)]/30 text-center shadow-xl">
                        <SplitText 
                            text="¡Comienza Tu Viaje!"
                            tag="h3"
                            className="text-4xl font-bold text-[var(--color-teal)] mb-6"
                            delay={40}
                            splitType="words"
                        />
                        <BlurText 
                            text="Empieza con la introducción para construir bases sólidas o explora temas específicos según tus necesidades"
                            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                            delay={25}
                            animateBy="words"
                        />
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link to="/machine_organization_and_architecture_introduction">
                                <Button size="lg" className="bg-gradient-to-r from-[var(--color-teal-2)] to-[var(--color-teal-3)] hover:from-[var(--color-teal-3)] hover:to-[var(--color-teal-2)] text-white shadow-lg text-lg px-8 py-6">
                                    <Book className="w-5 h-5 mr-2" />
                                    Comenzar con Introducción
                                </Button>
                            </Link>
                            <Link to="/cpu_organization">
                                <Button 
                                    size="lg" 
                                    variant="outline"
                                    className="border-2 border-[var(--color-orange)] text-[var(--color-orange)] hover:bg-[var(--color-orange)] hover:text-white shadow-lg text-lg px-8 py-6"
                                >
                                    <ArrowRight className="w-5 h-5 mr-2" />
                                    Explorar Temas
                                </Button>
                            </Link>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
}

export default Home;
