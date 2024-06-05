/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MC93duOTexk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <header className="flex items-center justify-between mb-8 md:mb-10">
          <div className="flex items-center gap-4">
            <img src="/placeholder.svg" alt="Gym Logo" width={40} height={40} className="w-10 h-10" />
            <h1 className="text-2xl font-bold tracking-tight">Fitness Central</h1>
          </div>
          <div className="hidden md:block">
            <Button variant="outline">View Schedule</Button>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Yoga</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Hatha Yoga</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">7:00 AM - 8:15 AM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Jane Doe</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Vinyasa Flow</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">9:30 AM - 10:45 AM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">John Smith</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Restorative Yoga</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">6:00 PM - 7:15 PM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Sarah Lee</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Spin</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Spin Blast</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">6:00 AM - 7:00 AM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Michael Johnson</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Endurance Ride</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">12:00 PM - 1:00 PM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Emily Davis</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Hill Climb</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">5:30 PM - 6:30 PM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">David Lee</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Strength</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Barbell Blast</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">8:00 AM - 9:00 AM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Jessica Thompson</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Kettlebell Crush</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">11:00 AM - 12:00 PM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Robert Wilson</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Bodyweight Blast</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">7:00 PM - 8:00 PM</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Lisa Martinez</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-10 text-center">
          <Button variant="outline">View Full Schedule</Button>
        </div>
      </div>
    </div>
  )
}
