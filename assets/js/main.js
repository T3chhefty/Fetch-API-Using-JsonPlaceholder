function getData() {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => res.json())
    .then((data) => {
      // table start
      const table = document.querySelector("table");
      table.innerHTML = "";
      table.innerHTML = `
 <tr>
      <th>AlbumId</th>
      <th>Id</th>
      <th>Title</th>
      <th>Url</th>
      <th>thumbnailUrl</th>
 </tr>
 `;
      //table end
      data.forEach((photo) => {
        table.innerHTML += `
        <tr> 
            <td>${photo.albumId}</td>
            <td>${photo.id}</td>
            <td>${photo.title}</td>
            <td><img src="${photo.url}" alt="my photo" width="80" height="50"></td>
            <td><img src="${photo.thumbnailUrl}" alt="my photo" width="20" height="20"></td>
           
        </tr> 
        `;
      });
    })
    .catch((err) => console.log(err));
}

getData();
