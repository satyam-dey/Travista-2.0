"use client"

import { useEffect, useState } from "react"

export default function StatsSection() {
  const [stats, setStats] = useState([
    { number: 0, label: "Districts Covered", target: 23 },
    { number: 0, label: "Amazing Destinations", target: 150 },
    { number: 0, label: "Happy Travelers", target: 1000 },
    { number: 0, label: "Travel Experiences", target: 500 },
  ])

  useEffect(() => {
    const animateStats = () => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          number: Math.min(stat.number + Math.ceil(stat.target / 50), stat.target),
        })),
      )
    }

    const interval = setInterval(animateStats, 50)
    const timeout = setTimeout(() => clearInterval(interval), 2500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="stats-section">
      <div className="container">
        <h2>Travista by Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}+</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
