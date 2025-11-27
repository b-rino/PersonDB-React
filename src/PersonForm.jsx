<form>
  <label htmlFor="id">Id</label>
  <input name="id" id="1" type="number" readOnly placeholder="id" />
  <label htmlFor="name">Name</label>
  <input name="name" id="name" type="text" placeholder="name" />
  <label htmlFor="age">Age</label>
  <input
    name="age"
    id="age"
    type="number"
    min="1"
    max="120"
    placeholder="age"
  />
  <label htmlFor="email">Email</label>
  <input name="email" id="email" type="email" placeholder="email" />
  <label htmlFor="gender">Gender</label>
  <select name="gender" id="gender">
    <option defaultChecked>Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
  <button type="submit">Submit</button>
</form>;
