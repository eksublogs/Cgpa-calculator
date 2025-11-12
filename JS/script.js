        // Get modal elements
        const modal = document.getElementById('resultModal');
        const closeBtn = document.getElementsByClassName('close')[0];

        // Close modal when clicking X
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
        }

        function calculateAggregate() {
            // Get O Level grades
            const subjects = ['english', 'mathematics', 'subject3', 'subject4', 'subject5'];
            let oLevelTotal = 0;
            let validSubjects = 0;

            subjects.forEach(subject => {
                const grade = document.getElementById(subject).value;
                if (grade) {
                    oLevelTotal += parseInt(grade);
                    validSubjects++;
                }
            });

            // Get JAMB score
            const jambScore = document.getElementById('jambScore').value;

            // Validation
            if (validSubjects < 5) {
                alert('Please select grades for all 5 O Level subjects!');
                return;
            }

            if (!jambScore || jambScore < 0 || jambScore > 400) {
                alert('Please enter a valid JAMB score between 0 and 400!');
                return;
            }

            // Calculate JAMB points (60% of total)
            const jambPoints = (parseInt(jambScore) / 400) * 60;

            // Calculate total aggregate
            const totalAggregate = oLevelTotal + jambPoints;

            // Display results
            document.getElementById('aggregateScore').textContent = totalAggregate.toFixed(2);
            document.getElementById('resultBreakdown').innerHTML = `
                <strong>Breakdown:</strong><br>
                O Level Points: ${oLevelTotal}/40<br>
                JAMB Points: ${jambPoints.toFixed(2)}/60<br>
                <strong>Total Aggregate: ${totalAggregate.toFixed(2)}/100</strong>
            `;

            modal.style.display = 'block';
        }

        // Add some interactive animations
        document.querySelectorAll('select, input').forEach(element => {
            element.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'transform 0.3s ease';
            });

            element.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });
