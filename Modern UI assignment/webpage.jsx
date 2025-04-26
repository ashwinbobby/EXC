// app/page.tsx
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="max-w-5xl w-full grid grid-cols-3 gap-8">

        {/* Left Section - Create Project */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="space-y-2">
              <Label>Framework</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nextjs">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="nuxt.js">Nuxt.js</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </div>
          </CardContent>
        </Card>

        {/* Middle Section - Buttons & Date Picker */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex gap-2">
            <Button>Button</Button>
            <Button variant="outline">Outline</Button>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Date Range</CardTitle>
            </CardHeader>
            <CardContent className="pl-2 pt-0">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      <span>
                        {date?.toLocaleDateString("en-US", {
                          month: "Jan",
                          day: '2-digit',
                          year: 'numeric'
                        })}
                        {" - "}
                        {date?.toLocaleDateString("en-US", {
                          month: "Feb",
                          day: '2-digit',
                          year: 'numeric'
                        })}
                      </span>
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

        </div>

        {/* Right Section - Revenue & Tabs */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl">Total Revenue</CardTitle>
            <CardDescription>
              $45,231.89
              <span className="text-green-500"> +20.1%</span> from last month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                Overview content
              </TabsContent>
              <TabsContent value="analytics">
                Analytics content
              </TabsContent>
              <TabsContent value="reports">
                Reports content
              </TabsContent>
              <TabsContent value="notifications">
                Notifications content
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
