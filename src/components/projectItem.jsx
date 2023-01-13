export default function projectItem({ title, img, stack, liveLink, gitLink }) {
  return (
    <div className="row my-3 border shadow-lg rounded projectCard">
      <img src={img} alt="projectImage" className="col-6 project--img" />
      <div className="col">
        <h3 className="text-center">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          justo quis nunc imperdiet egestas. Praesent quis nunc venenatis,
          suscipit massa non, hendrerit felis. Vestibulum in odio congue,
          sollicitudin enim id, lacinia nibh. Class aptent taciti sociosqu ad
        </p>
        <p className="text-center ">
          {stack.map(item => (
            <span className="mx-2 border border-success bg-dark px-2 rounded">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
