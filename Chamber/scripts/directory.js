let cachedMembers = [];  // Store members after fetching

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.json();  // Data is { members: [...] }
        console.log('Fetched members:', data);

        if (!data.members || !Array.isArray(data.members)) {
            throw new Error('Fetched data does not contain a valid members array');
        }

        cachedMembers = data.members;  // Extract the array
            displayMembers(cachedMembers, 'grid');
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    }

    function displayMembers(members, viewType) {
        const container = document.getElementById('members');
        container.className = viewType + '-view';
        container.innerHTML = '';

        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function toggleView(view) {
        if (cachedMembers.length > 0) {
            displayMembers(cachedMembers, view);
        } else {
            fetchMembers();
        }
    }

    fetchMembers();