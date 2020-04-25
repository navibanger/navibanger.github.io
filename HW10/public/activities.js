
    function actTable() {
        let tbody = document.querySelector("#ActivityTable tbody");
        events.forEach(function(event) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${event.name}</td><td>${event.dates}</td>`;
            tbody.appendChild(tr);
        })
    }
    actTable();
