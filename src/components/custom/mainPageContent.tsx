import { Ellipsis, Facebook, Linkedin, Mail, Twitter, Triangle } from "lucide-react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

const defaultCards = [
    {
        title: "Understanding the role of AI in software development",
        time: "09:00 AM",
        duration: "12 min read",
        image: "/lady-1.png",
    },
    {
        title: "The ethics of machine learning and bias",
        time: "10:30 AM",
        duration: "8 min read",
        image: "/lady-2.png",
    },
    {
        title: "AI-driven decision making in the legal world",
        time: "11:45 AM",
        duration: "15 min read",
        image: "/lady-3.png",
    },
]

function useLocalStorage(key: any, initialValue: any) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key)
            return stored ? JSON.parse(stored) : initialValue
        } catch {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

function CarouselSpacing({ cards }: { cards: typeof defaultCards }) {
    return (
        <div className="w-full mb-4">
            <Carousel className="w-full mt-3">
                <CarouselContent className="-ml-2">
                    {cards.map((card, idx) => (
                        <CarouselItem
                            key={idx}
                            className="pl-2 md:basis-1/2 lg:basis-1/3 snap-start"
                        >
                            <Card className="hover:scale-[1.03] transition-transform duration-300 overflow-hidden bg-[#FFFAEA] border-none">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-40 object-cover"
                                />
                                <CardContent className="p-1 space-y-2 -my-4 mb-2 shadow-none bg-[#FFFAEA] border-none">
                                    <h3 className="text-md leading-snug">
                                        {card.title}
                                    </h3>
                                    <div className="flex gap-4 text-xs text-gray-500 mt-3">
                                        <span>{card.time}</span>
                                        <span>{card.duration}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

function SectionWithCards({ title, cards, setCards }: {
    title: string
    cards: typeof defaultCards
    setCards: (cards: typeof defaultCards) => void
}) {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        time: "",
        duration: "",
        image: "",
    })

    function handleAddCard() {
        if (!formData.title || !formData.image) return
        setCards([...cards, formData])
        setFormData({ title: "", time: "", duration: "", image: "" })
        setOpen(false)
    }

    return (
        <div>
            <div className="flex items-center gap-8 pb-2 pt-3 w-fit">
                <h2 className="text-2xl font-medium">{title}</h2>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <button className="rounded-full border-[#c38024] border-2 text-[#c38024] px-4 py-1 text-sm hover:bg-[#c38024]/10 transition">
                            Add new card
                        </button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#FFFAEA] rounded-none">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-medium">Add New Card</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <Input
                                placeholder="Title"
                                value={formData.title}
                                className="rounded-none"
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                            <Input
                                placeholder="Time (e.g. 09:00 AM)"
                                className="rounded-none"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            />
                            <Input
                                placeholder="Duration (e.g. 12 min read)"
                                className="rounded-none"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            />
                            <Input
                                placeholder="Image URL"
                                className="rounded-none"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            />
                            <button onClick={handleAddCard} className="h-10 px-4 rounded-full flex items-center justify-center relative overflow-hidden mt-6">
                                <img
                                    src="/overlay.jpg"
                                    className="absolute inset-0 w-full h-full object-cover scale-200"
                                    alt="shimmer"
                                />
                                <span className="relative z-2 px-3 rounded-full text-black">
                                    Add Card
                                </span>
                            </button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <CarouselSpacing cards={cards} />
        </div>
    )
}

export function MainPageTabs() {
    const [recentCorp, setRecentCorp] = useLocalStorage("recentCorpCards", defaultCards)
    const [recentConst, setRecentConst] = useLocalStorage("recentConstCards", defaultCards)
    const [trendCorp, setTrendCorp] = useLocalStorage("trendCorpCards", defaultCards)
    const [trendConst, setTrendConst] = useLocalStorage("trendConstCards", defaultCards)
    const [aboutCorp, setAboutCorp] = useLocalStorage("aboutCorpCards", defaultCards)
    const [aboutConst, setAboutConst] = useLocalStorage("aboutConstCards", defaultCards)

    return (
        <div className="flex w-full max-w-full flex-col gap-6 mt-12">
            <Tabs defaultValue="recent">
                <div className="flex justify-between border-b-2 mb-1 items-center">
                    <TabsList className="flex gap-2">
                        <TabsTrigger value="recent" className="text-neutral-600 p-2">Recent</TabsTrigger>
                        <TabsTrigger value="trending" className="text-neutral-600 p-2">Trending</TabsTrigger>
                        <TabsTrigger value="about" className="text-neutral-600 p-2">About</TabsTrigger>
                    </TabsList>
                    <div>
                        <button className="rounded-full border-[#c38024] border-2 text-[#c38024] px-4 flex items-center">
                            Top
                            <Triangle fill="#c38024" width={8} className="mx-1 rotate-180" />
                        </button>
                    </div>
                </div>
                <TabsContent value="recent">
                    <SectionWithCards title="Corporate Law" cards={recentCorp} setCards={setRecentCorp} />
                    <div className="h-4" />
                    <SectionWithCards title="Constitutional Law" cards={recentConst} setCards={setRecentConst} />
                </TabsContent>
                <TabsContent value="trending">
                    <SectionWithCards title="Corporate Law" cards={trendCorp} setCards={setTrendCorp} />
                    <SectionWithCards title="Constitutional Law" cards={trendConst} setCards={setTrendConst} />
                </TabsContent>
                <TabsContent value="about">
                    <SectionWithCards title="Corporate Law" cards={aboutCorp} setCards={setAboutCorp} />
                    <SectionWithCards title="Constitutional Law" cards={aboutConst} setCards={setAboutConst} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default function MainPageContent() {
    return (
        <div>
            <div className="flex w-full justify-between items-center mb-4">
                <h1 className="text-3xl font-medium">Robert Fox's Page</h1>
                <Ellipsis />
            </div>
            <p>
                An author is a creator of written works, such as books, articles, or stories, who uses words to inform, entertain, or inspire readers. They often draw from imagination.
            </p>
            <div className="flex gap-2 rounded-full my-6 border-2 border-[#c38024] p-1 w-fit">
                {[Facebook, Linkedin, Twitter, Mail].map((Icon, index) => (
                    <div
                        key={index}
                        className="h-9 w-9 rounded-full flex items-center justify-center relative overflow-hidden cursor-pointer"
                    >
                        <img
                            src="/overlay.jpg"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="shimmer"
                        />
                        <Icon className="w-5 h-5 text-black relative z-10" />
                    </div>
                ))}
            </div>
            <div>
                <MainPageTabs />
            </div>
        </div>
    )
}
