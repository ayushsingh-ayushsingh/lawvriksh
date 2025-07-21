import { PenTool } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "timelineActivities";

type Activity = {
    date: string;
    title: string;
    link: string;
};

const defaultActivities: Activity[] = [
    {
        date: "Jul 6",
        title: "Wrote an article",
        link: "My GitHub Setup, Tricks & Daily Commands",
    },
    {
        date: "Oct 27 2024",
        title: "Wrote an article",
        link: "My GitHub Setup, Tricks & Daily Commands",
    },
    {
        date: "Oct 27 2024",
        title: "Wrote an article",
        link: "My GitHub Setup, Tricks & Daily Commands",
    },
    {
        date: "Oct 27 2024",
        title: "Wrote an article",
        link: "My GitHub Setup, Tricks & Daily Commands",
    },
    {
        date: "Oct 27 2024",
        title: "Wrote an article",
        link: "My GitHub Setup, Tricks & Daily Commands",
    },
];

export default function Timeline() {
    const [activities, setActivities] = useState<Activity[]>(defaultActivities);
    const [formData, setFormData] = useState<Activity>({ date: "", title: "", link: "" });

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) setActivities(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
    }, [activities]);

    const addActivity = () => {
        if (!formData.date || !formData.title || !formData.link) return;
        setActivities([formData, ...activities]);
        setFormData({ date: "", title: "", link: "" });
        setDialogOpen(false);
    };

    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center mt-12">
                <h3 className="text-xl">Recent Activities</h3>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <button className="rounded-full border-[#c38024] border-2 text-[#c38024] px-3">
                            ADD
                        </button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#FFFAEA] rounded-none">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-medium">Add Activity</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <Input
                                placeholder="Date (e.g. Jul 6)"
                                value={formData.date}
                                className="rounded-none"
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                            <Input
                                placeholder="Title"
                                value={formData.title}
                                className="rounded-none"
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                            <Input
                                placeholder="Link Text"
                                value={formData.link}
                                className="rounded-none"
                                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                            />
                            <button
                                onClick={addActivity}
                                className="h-10 px-4 rounded-full flex items-center justify-center relative overflow-hidden mt-6"
                            >
                                <img
                                    src="/overlay.jpg"
                                    className="absolute inset-0 w-full h-full object-cover scale-200"
                                    alt="shimmer"
                                />
                                <span className="relative z-10 text-black">Add Activity</span>
                            </button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <hr className="my-3 border-black/10 border-t-2" />

            <div className="text-[#403419] font-sans">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="w-24 flex-shrink-0 text-center text-sm pt-px">
                            {activity.date}
                            {index < activities.length - 1 && (
                                <div className="ml-12 w-1 my-2 h-16 bg-gradient-to-b from-yellow-600 to-yellow-500 rounded-full" />
                            )}
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2 text-sm">
                                <PenTool size={16} className="text-[#403419]" />
                                <span>{activity.title}</span>
                            </div>
                            <a href="#" className="underline underline-offset-2 hover:text-[#c38024] text-sm font-light">
                                {activity.link}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
