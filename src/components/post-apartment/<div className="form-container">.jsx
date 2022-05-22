<div className="form-container">
Form
<form className="form" noValidate autoComplete="off">
    <input
      accept="image/*"
      className="input"
      id="icon-button-photo"
      defaultValue={image}
      onChange={handleImage}
      type="file"
    />
    <label htmlFor="icon-button-photo">
      <IconButton color="primary" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
    <TextField
      fullWidth
      id="outlined-basic"
      label="Plant's name"
      variant="outlined"
      className="text-field"
      defaultValue={petName}
      onChange={(e) => setPetName(e.target.value)}
    />
    <TextField
      fullWidth
      id="outlined-basic"
      label="Owner's name"
      variant="outlined"
      className="text-field"
      defaultValue={ownerName}
      onChange={(e) => setOwnerName(e.target.value)}
    />
    <TextField
      fullWidth
      name="petType"
      select
      label="Plant Type"
      variant="outlined"
      className="text-field"
      onChange={(e) => setPetType(e.target.value)}
      defaultValue=""
      ref={petTypeRef}
    >
      <MenuItem value="Aquatic plants">Aquatic plants</MenuItem>
      <MenuItem value="Bulbs">Bulbs</MenuItem>
      <MenuItem value="Cacti and succulents">
        Cacti and succulents
      </MenuItem>
      <MenuItem value="Climbers">Climbers</MenuItem>
      <MenuItem value="Ferns">Ferns</MenuItem>
      <MenuItem value="Carnivorous plants">
        Carnivorous plants
      </MenuItem>
      <MenuItem value="Alpines">Alpines</MenuItem>
      <MenuItem value="Annuals and biennials">
        Annuals and biennials
      </MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </TextField>
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={handleSubmit}
    >
      Submit
    </Button>
  </form>
</div>