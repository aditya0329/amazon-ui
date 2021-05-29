import Product from "./Product";

function ProductsFeed({ productCollection }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
    
            {productCollection.slice(0,4).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}

            <img className="md:col-span-full lg:flex mx-auto" src="https://links.papareact.com/dyz" alt=""></img>
            <div className='md:col-start-2'>
            {productCollection.slice(4,5).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
            </div>
            {productCollection.slice(5,productCollection.length).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}

        </div>
    );
}

export default ProductsFeed
