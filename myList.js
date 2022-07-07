
        function addItems() {
            tit = document.getElementById('title').value;
            desc = document.getElementById('description').value;
            if (localStorage.getItem('itemsJson') == null) {
                itemJsonArray = [];
                itemJsonArray.push([tit, desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            else {
                itemJsonArrayStr = localStorage.getItem('itemsJson');
                itemJsonArray = JSON.parse(itemJsonArrayStr);
                itemJsonArray.push([tit, desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            updateItems();
        }

        function updateItems() {

            tit = document.getElementById('title').value;
            desc = document.getElementById('description').value;

            if (localStorage.getItem('itemsJson') == null) {
                itemJsonArray = [];
            }
            else {
                itemJsonArrayStr = localStorage.getItem('itemsJson');
                itemJsonArray = JSON.parse(itemJsonArrayStr);
            }

            tableBody = document.getElementById('tableBody');
            let str = "";
            for (let index = 0; index < itemJsonArray.length; index++) {
                str += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${itemJsonArray[index][0]}</td>
                        <td>${itemJsonArray[index][1]}</td> 
                        <td><button class="btn btn-sm btn-primary" onclick = "deleteItem(${index})">Delete</button></td> 
                    </tr>

                    `;
            }
            tableBody.innerHTML = str;

        }

        function deleteItem(itemIndex) {
            console.log("Delete", itemIndex);
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            // Delete itemIndex element from the array
            itemJsonArray.splice(itemIndex, 1);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            updateItems();
        }

        add = document.getElementById('add');
        add.addEventListener("click", addItems);

        function clearStorage() {
            if (confirm("Do you areally want to clear?")) {
                console.log('Clearing the storage')
                localStorage.clear();
                updateItems();
            }
        }