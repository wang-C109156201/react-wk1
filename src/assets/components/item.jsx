export default function item({products}) {
    return(
        <section className="image mt-4 col-sm-6 col-lg-3" key={products.id}>
                <div >
                    <a href="" className="image__link">
                        <img  className="image__style"
                            src={products.img_link}
                            alt={products.name}
                        />
                    </a>
                    <p className="image_title">{products.name}</p>
                </div>
            </section>
    )
}