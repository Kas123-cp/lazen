// src/components/seo/ProductJsonLd.tsx
'use client';

type ProductJsonLdProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  condition: 'New' | 'Used';
};

export default function ProductJsonLd({
  id,
  name,
  description,
  image,
  price,
  brand,
  condition,
}: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    image,
    description,
    sku: id,
    mpn: id,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://lapzen.netlify.app/products/${id}`,
      priceCurrency: "PKR",
      price,
      itemCondition:
        condition === 'New'
          ? 'https://schema.org/NewCondition'
          : 'https://schema.org/UsedCondition',
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
