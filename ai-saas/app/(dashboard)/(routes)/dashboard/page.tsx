"use client";

import { MessageSquare } from "lucide-react";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: 'text-violet-500',
        bgColor: "bg-violet-500/10",
        href: "/conversation"

    }
]

const DashboardPage = () => {
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold">
                    Explore the power of the ai
                </h2>
                <p className="text-muted-foreground font-light text-sm
                ms: text-lg text-center">
                    Chat with the smarter Ai -Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                { tools.map((tool) => (
                    
                ))}
            </div>
        </div>  
    )
}


export default DashboardPage;