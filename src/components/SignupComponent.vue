<template>
    <form style="width: 18rem;">

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Firstname: </label>
    <input type="text" class="form-control" id="exampleInputFirstName" >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Secondname: </label>
    <input type="text" class="form-control" id="exampleInputSecondName" >
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address: </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" size="50px">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" >
  </div>
  <select class="form-select" aria-label="Default select example">
  <option selected>Select your role</option>
  <option value="1">Owner</option>
  <option value="2">Worker</option>
  <option value="3">Engineer</option>
</select>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Company: </label>
    <input type="text" class="form-control" id="exampleCompany" >
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" >
    <label class="form-check-label" for="exampleCheck1">Receive notifications</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>
<script>
export default{
    name:"SignupComponent"
}
</script>