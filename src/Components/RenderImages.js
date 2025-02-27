const RenderImages = ({ data }) => {
    return (
        <div className="gallery">
            {

                data.map((d, index) => {

                    return (

                        <img className={d.alt === "Intro Gallery Dining Sample Pictures" ? "hidesm" : ""} src={d.pic} alt={d.alt} key={index} />
                    )

                })
            }
        </div>
    )
}
export default RenderImages;