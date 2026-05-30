import { Activity, CalendarClock, IndianRupee, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const metrics = [
  { label: "Daily Orders", value: "184", icon: Activity },
  { label: "Reservations", value: "63", icon: CalendarClock },
  { label: "Customers", value: "2,481", icon: Users },
  { label: "Revenue", value: "₹14,230", icon: IndianRupee }
]

export function DashboardPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <metric.icon className="size-4 text-cafe-gold" />
              </div>
              <p className="mt-3 font-heading text-3xl text-cafe-espresso dark:text-cafe-cream">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-heading text-3xl text-cafe-espresso dark:text-cafe-cream">Revenue Trend</h3>
          <div className="mt-5 grid grid-cols-7 items-end gap-2">
            {[52, 64, 71, 66, 79, 84, 92].map((value, index) => (
              <div key={index} className="space-y-2 text-center">
                <div className="rounded-t-xl bg-espresso-gradient" style={{ height: `${value * 1.6}px` }} />
                <p className="text-xs text-muted-foreground">W{index + 1}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-heading text-3xl text-cafe-espresso dark:text-cafe-cream">Latest Reservations</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-cafe-gold/20 text-muted-foreground">
                  <th className="pb-2 font-medium">Guest</th>
                  <th className="pb-2 font-medium">Date</th>
                  <th className="pb-2 font-medium">Guests</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Emma Stone", "May 23", "2", "Confirmed"],
                  ["Lucas Brown", "May 23", "4", "Pending"],
                  ["Ivy Chen", "May 24", "3", "Confirmed"],
                  ["Noah Reed", "May 24", "5", "VIP"]
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-cafe-gold/10">
                    <td className="py-3">{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>
                      <span className="rounded-full bg-cafe-gold/20 px-3 py-1 text-xs text-cafe-gold">{row[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


