export const yearlyPlans = [
  {
    id: "starter",
    title: "Starter",
    price: 10,
  },
  {
    id: "pro",
    title: "Pro",
    price: 25,
  },
  {
    id: "team",
    title: "Team",
    price: 100,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: 10_000,
  },
];

export const monthlyPlans = yearlyPlans.map((plan) => ({
  ...plan,
  price: plan.price * 1.2,
}));
