import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
      nodes {
        desc {
          id
          name
        }
        company
        position
        strapiId
        date
      }
    }
  }
`

const Jobs = () => {

  const { allStrapiJobs: { nodes: jobs } } = useStaticQuery(query);

  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value];

  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        {/* Btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.strapiId}
              className={`job-btn ${index == value && "active-btn"}`}
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>
          ))}
        </div>
        {/* Jobs info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            desc.map(({ id, name }) => (
              <div key={id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{name}</p>
              </div>
            ))
          }
        </article>
      </div>
      <Link to="/about" className="btn center-btn">More info</Link>
    </section>
  )
}

export default Jobs
