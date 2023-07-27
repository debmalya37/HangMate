import { useState } from "react";
import Nav from "../Components/Nav";


const OnBoarding = () => {

  const [formData, setFormData] = useState({
    user_id: '',
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_indentity: 'man',
    gender_interest: 'woman',
    email: '',
    url: '',
    about: '',
    matches: []
  })

  const handleSubmit = ()=> {
    console.log('submit successful');
  }
  const handleChange = (e)=> {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    
    setFormData((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }
  console.log(formData);
  return <>
  <Nav
    minimal={true}
     authToken
     setShowModal={()=> {}} 
     showModal={false}
  />
  <div className="onboarding">
    <h2>CREATE ACCOUNT</h2>
    <form onSubmit={handleSubmit}>
      <section>
      {/* Inputs for showing my INFO  */}
        <label htmlFor="first_name">First Name</label>
        <input 
        type="text" 
        id="first_name" 
        name="first_name"
        placeholder="First Name"
        required={true}
        value={formData.first_name}
        onChange={handleChange}
        />
        <label>Birthday</label>
        <div className="multiple-input-container">

        <input 
        type="number" 
        id="dob_day" 
        name="dob_day"
        placeholder="DD"
        required={true}
        value={formData.dob_day}
        onChange={handleChange}
        />
        <input 
        type="number" 
        id="dob_month" 
        name="dob_month"
        placeholder="MM"
        required={true}
        value={formData.dob_month}
        onChange={handleChange}
        />
        <input 
        type="number" 
        id="dob_year" 
        name="dob_year"
        placeholder="YYYY"
        required={true}
        value={formData.dob_year}
        onChange={handleChange}
        /> 
        </div>

        {/* Inputs for showing my gender  */}
        <label>Gender</label>
        <div className="multiple-input-container">
            <input 
            type="radio" 
            id="man_gender-identity" 
            name="gender_identity"
            value="man"
            onChange={handleChange}
            checked={true}
            />
            <label htmlFor="man_gender-identity">Man</label>
            <input 
            type="radio" 
            id="woman_gender-identity" 
            name="gender_identity"
            value="woman"
            onChange={handleChange}
            checked={false}
            />
            <label htmlFor="woman_gender-identity">Woman</label>
            <input 
            type="radio" 
                id="more_gender-identity" 
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={false}
                />
                <label htmlFor="more_gender-identity">More</label>
                </div>
                <label htmlFor="show-gender">Show Gender on my profile</label>
                <input 
                id="show-gender" 
                type="checkbox" 
                name="show-gender"
                onChange={handleChange}
                checked={false}
                />
                {/* Inputs for showing my intrests  */}
                <label>Show Me</label>
                <div className="multiple-input-container">
                <input 
                type="radio" 
                id="man_gender-interest" 
                name="gender_interest"
                value="man"
                onChange={handleChange}
                checked={false}
                />
                <label htmlFor="man_gender-interest">Man</label>
                <input 
                type="radio" 
                id="woman_gender-interest" 
                name="gender_interest"
                value="woman"
                onChange={handleChange}
                checked={true}
                />
                <label htmlFor="woman_gender-interest">Woman</label>
                <input 
                type="radio" 
                id="everyone_gender-interest" 
                name="gender_interest"
                value="more"
                onChange={handleChange}
                checked={false}
                />
                <label htmlFor="everyone_gender-interest">Everyone</label>                
                </div>

                <label htmlFor="about">About me</label>
                <input 
                type="text"
                id="about"
                name="about"
                required={true}
                placeholder="I like long Walks.."
                value={formData.about}
                onChange={handleChange}
                 />
                 <input type="submit" />
      </section>
      {/* end of this first section about INFO */}
      <section>
      { /* start second Section with social media links */ }
        <label htmlFor="url">Profile Photos</label>
          <input 
          type="url"
          name="url"
          id="url"
          onChange={handleChange}
          required={true}
          placeholder='https://example.com/image1'
           />
        <div className="photo-container">
        <img  src={formData.url} alt="Profile Pic Preview"/>
        </div>

      </section>
    </form>
  </div>
  </>;

};

export default OnBoarding;
