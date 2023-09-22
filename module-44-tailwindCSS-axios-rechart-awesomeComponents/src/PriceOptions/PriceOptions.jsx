import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": 29.99,
      "features": [
        "Access to core product functionality",
        "Limited customer support",
        "No customization options",
        "Monthly usage reports",
        "Up to 100GB of storage"
      ]
    },
    {
      "id": 2,
      "name": "Pro",
      "price": 49.99,
      "features": [
        "Access to core product functionality",
        "Priority customer support",
        "Basic customization options",
        "Monthly usage reports",
        "Up to 250GB of storage",
        "Integration with third-party apps"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 79.99,
      "features": [
        "Access to core product functionality",
        "24/7 premium customer support",
        "Advanced customization options",
        "Monthly usage reports",
        "Up to 1TB of storage",
        "Exclusive add-on features",
        "Dedicated account manager"
      ]
    }
  ]


  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-cols-3 gap-6">
        {
          priceOptions.map(option => <PriceOption option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;