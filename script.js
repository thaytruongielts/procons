document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            text: "One of the most pressing issues today is the dramatic increase in global temperatures, which has led to a variety of environmental problems. This is largely caused by the emission of greenhouse gases from human activities. A key solution to this problem is to promote the use of renewable energy sources such as solar and wind power, while also encouraging individuals to reduce their carbon footprint.",
            problem: "dramatic increase in global temperatures",
            solution: "promote the use of renewable energy sources"
        },
        {
            text: "Many countries are facing the issue of an aging population, which puts a significant strain on healthcare systems and social services. This demographic shift is often due to lower birth rates and increased life expectancy. A possible solution is to encourage older adults to remain in the workforce longer and to invest more in preventive healthcare programs.",
            problem: "aging population",
            solution: "encourage older adults to remain in the workforce"
        },
        {
            text: "The rapid urbanization in many developing nations has led to a serious shortage of affordable housing. This is a significant challenge for low-income families. A viable solution would be for governments to invest in public housing projects and to implement policies that encourage the construction of cost-effective residential units.",
            problem: "shortage of affordable housing",
            solution: "invest in public housing projects"
        },
        {
            text: "The overuse of plastic products has become a major environmental issue, causing significant pollution of oceans and landfills. To mitigate this problem, a key solution is to impose strict taxes on single-use plastics and to promote the use of reusable alternatives.",
            problem: "overuse of plastic products",
            solution: "impose strict taxes on single-use plastics"
        },
        {
            text: "Childhood obesity has become an alarming public health crisis in many developed countries. This trend is often linked to a sedentary lifestyle and poor dietary habits. A powerful solution is to integrate more physical education into school curricula and to launch public health campaigns promoting healthy eating.",
            problem: "Childhood obesity",
            solution: "integrate more physical education into school curricula"
        },
        {
            text: "A growing concern in modern society is the increasing amount of traffic congestion in major cities. This issue is primarily caused by the high number of private vehicles on the road. A practical solution is to expand and improve public transportation networks to make them a more attractive alternative to driving.",
            problem: "increasing amount of traffic congestion",
            solution: "expand and improve public transportation networks"
        },
        {
            text: "Cyberbullying is a severe problem among teenagers and can lead to serious mental health issues. Its prevalence is due to the widespread use of social media platforms. One effective solution is for parents and schools to educate young people about responsible online behavior and its potential consequences.",
            problem: "Cyberbullying",
            solution: "educate young people about responsible online behavior"
        },
        {
            text: "The depletion of natural resources, such as forests and clean water, poses a significant threat to global sustainability. This is a direct result of unsustainable industrial practices. A long-term solution involves encouraging companies to adopt more environmentally friendly manufacturing processes and to recycle waste materials.",
            problem: "depletion of natural resources",
            solution: "encourage companies to adopt more environmentally friendly manufacturing processes"
        },
        {
            text: "In many parts of the world, there is a serious problem of food waste, with large quantities of edible food being discarded every day. A main cause is inefficient supply chain management. A potential solution is to improve the infrastructure for storing and distributing food, and to raise public awareness about the issue.",
            problem: "food waste",
            solution: "improve the infrastructure for storing and distributing food"
        },
        {
            text: "The high cost of university tuition is preventing many qualified students from pursuing higher education. This issue often results in a less skilled workforce. One solution is for governments to provide more financial aid and scholarships to make tertiary education more accessible to all students.",
            problem: "high cost of university tuition",
            solution: "provide more financial aid and scholarships"
        },
        {
            text: "The spread of misinformation on social media platforms is a major challenge for modern democracies. This is largely caused by a lack of content regulation. An effective solution is for social media companies to implement stronger fact-checking mechanisms and to be more transparent about their algorithms.",
            problem: "spread of misinformation",
            solution: "implement stronger fact-checking mechanisms"
        },
        {
            text: "The disappearance of local languages and cultural traditions is a growing concern due to globalization. A key cause is the dominance of a few major languages in media and education. A possible solution is to introduce compulsory lessons in native languages in schools and to support local artists and craftsmen.",
            problem: "disappearance of local languages",
            solution: "introduce compulsory lessons in native languages"
        },
        {
            text: "Water pollution from industrial waste is harming marine ecosystems and affecting human health. A significant cause is the inadequate treatment of wastewater before it is released. A clear solution is to enforce stricter environmental regulations on factories and to invest in advanced water treatment technologies.",
            problem: "Water pollution from industrial waste",
            solution: "enforce stricter environmental regulations on factories"
        },
        {
            text: "The increasing use of automation and artificial intelligence in the workplace is leading to job losses in some sectors. This is creating economic anxiety for many workers. A viable solution is for governments to invest in vocational training programs to help displaced workers gain new skills.",
            problem: "job losses in some sectors",
            solution: "invest in vocational training programs"
        },
        {
            text: "Illegal fishing is a serious threat to the sustainability of marine life and the livelihoods of small-scale fishermen. This is often driven by a lack of effective monitoring and enforcement. One solution is to use satellite technology to track fishing vessels and to increase penalties for illegal fishing activities.",
            problem: "Illegal fishing",
            solution: "use satellite technology to track fishing vessels"
        },
        {
            text: "Many cities are experiencing a lack of public green spaces, which negatively impacts the mental well-being of residents. This is a result of rapid construction and urban sprawl. A good solution is to implement urban planning policies that require new developments to include parks and community gardens.",
            problem: "lack of public green spaces",
            solution: "implement urban planning policies that require new developments"
        },
        {
            text: "The decline of biodiversity due to habitat destruction is a critical global issue. This is primarily caused by deforestation for agricultural land. A key solution is to protect and restore natural habitats through the creation of national parks and to promote sustainable farming practices.",
            problem: "decline of biodiversity",
            solution: "protect and restore natural habitats"
        },
        {
            text: "The high levels of stress and burnout among employees are leading to decreased productivity and job satisfaction. This is often caused by long working hours and a lack of work-life balance. An effective solution is for companies to offer flexible working hours and to provide mental health support programs.",
            problem: "high levels of stress and burnout",
            solution: "offer flexible working hours"
        },
        {
            text: "The excessive noise levels in large cities can cause hearing problems and increase stress. This is mainly due to heavy traffic and industrial activities. One solution is to create designated quiet zones and to use noise-reducing materials in urban construction.",
            problem: "excessive noise levels",
            solution: "create designated quiet zones"
        },
        {
            text: "The spread of non-native, invasive species is threatening local ecosystems and agriculture. This issue is often caused by global trade and tourism. A practical solution is to implement strict biosecurity measures at borders to prevent the introduction of new species.",
            problem: "spread of non-native, invasive species",
            solution: "implement strict biosecurity measures at borders"
        },
        {
            text: "The reliance on fossil fuels for energy generation is contributing to air pollution and climate change. A major cause is the existing energy infrastructure. A crucial solution is to transition to renewable energy sources and to subsidize the development of clean energy technologies.",
            problem: "reliance on fossil fuels",
            solution: "transition to renewable energy sources"
        },
        {
            text: "The increasing number of people suffering from chronic diseases like diabetes and heart disease is a global health crisis. This is often linked to unhealthy diets and lack of exercise. A good solution is to launch public awareness campaigns on healthy living and to make healthier food options more affordable.",
            problem: "chronic diseases like diabetes and heart disease",
            solution: "launch public awareness campaigns on healthy living"
        },
        {
            text: "The issue of digital piracy is a major concern for the creative industries, as it leads to significant financial losses. This is due to the easy accessibility of pirated content online. An effective solution is to enforce stronger copyright laws and to provide more affordable legal streaming services.",
            problem: "digital piracy",
            solution: "enforce stronger copyright laws"
        },
        {
            text: "The lack of access to clean drinking water is a critical problem in many developing countries. This is often caused by inadequate infrastructure and contamination. A viable solution is to invest in new water purification facilities and to educate local communities on safe water practices.",
            problem: "lack of access to clean drinking water",
            solution: "invest in new water purification facilities"
        },
        {
            text: "The high rate of youth unemployment in some regions is creating social and economic instability. This is often a result of a mismatch between skills and job market needs. One solution is to reform the education system to better prepare students for the demands of the modern economy.",
            problem: "high rate of youth unemployment",
            solution: "reform the education system"
        },
        {
            text: "The rapid deforestation in the Amazon rainforest is threatening indigenous communities and global climate stability. This is mainly caused by illegal logging and agricultural expansion. A key solution is to strengthen law enforcement to prevent illegal activities and to promote sustainable land use.",
            problem: "rapid deforestation",
            solution: "strengthen law enforcement to prevent illegal activities"
        },
        {
            text: "The problem of overtourism in popular destinations is harming local cultures and the environment. This is driven by the growing number of international travelers. A good solution is for local governments to implement tourist quotas and to promote lesser-known destinations.",
            problem: "overtourism in popular destinations",
            solution: "implement tourist quotas"
        },
        {
            text: "The use of chemical fertilizers in agriculture is leading to soil degradation and water contamination. A major cause is the demand for high crop yields. A clear solution is to encourage farmers to adopt organic farming methods and to offer financial incentives for sustainable practices.",
            problem: "use of chemical fertilizers",
            solution: "encourage farmers to adopt organic farming methods"
        },
        {
            text: "The issue of inadequate mental health services is a pressing concern in many healthcare systems. This often leads to a lack of support for people with mental illnesses. A practical solution is to increase funding for mental health programs and to reduce the stigma associated with seeking help.",
            problem: "inadequate mental health services",
            solution: "increase funding for mental health programs"
        },
        {
            text: "The rise of online gambling is creating a new wave of addiction and financial problems for many individuals. This is caused by the easy accessibility of gambling apps and websites. One solution is to implement stricter regulations on online gambling platforms and to provide better support for people with gambling problems.",
            problem: "rise of online gambling",
            solution: "implement stricter regulations on online gambling platforms"
        },
        {
            text: "The excessive use of personal vehicles in cities is a leading cause of urban air pollution. This is largely due to the convenience they offer. A powerful solution is to introduce a congestion charge for vehicles entering city centers and to improve walking and cycling infrastructure.",
            problem: "excessive use of personal vehicles",
            solution: "introduce a congestion charge for vehicles"
        },
        {
            text: "The loss of privacy in the digital age is a significant concern for many citizens. This is caused by the collection of personal data by tech companies. An effective solution is to implement stronger data protection laws and to empower individuals to control their own data.",
            problem: "loss of privacy in the digital age",
            solution: "implement stronger data protection laws"
        },
        {
            text: "The problem of antibiotic resistance is a major threat to global public health. This is a result of the misuse and overuse of antibiotics. A key solution is to raise public awareness about the issue and to regulate the sale of antibiotics more strictly.",
            problem: "antibiotic resistance",
            solution: "regulate the sale of antibiotics more strictly"
        },
        {
            text: "The high levels of noise from aircraft in areas near airports are negatively affecting the lives of residents. This is due to the increasing volume of air travel. A viable solution is to invest in quieter engine technology and to implement flight path regulations that minimize noise pollution.",
            problem: "noise from aircraft",
            solution: "invest in quieter engine technology"
        },
        {
            text: "The lack of equal pay for women in many industries is a persistent social injustice. A primary cause is gender discrimination. A clear solution is to pass and enforce laws mandating equal pay for equal work and to promote transparency in salary structures.",
            problem: "lack of equal pay for women",
            solution: "pass and enforce laws mandating equal pay"
        },
        {
            text: "The problem of electronic waste (e-waste) is growing rapidly and poses environmental hazards. This is caused by the quick obsolescence of electronic devices. A good solution is to establish more recycling programs for e-waste and to encourage manufacturers to design more durable products.",
            problem: "electronic waste (e-waste)",
            solution: "establish more recycling programs for e-waste"
        },
        {
            text: "The increasing number of people living in urban slums is a significant issue in many cities. This is a result of rapid population growth and poverty. A practical solution is to develop affordable housing initiatives and to provide job training opportunities for residents.",
            problem: "increasing number of people living in urban slums",
            solution: "develop affordable housing initiatives"
        },
        {
            text: "The decline of traditional craftsmanship is a concern for cultural heritage. This is caused by a lack of young people entering these trades. A viable solution is to offer apprenticeships and training programs to preserve these skills and to promote the value of handmade goods.",
            problem: "decline of traditional craftsmanship",
            solution: "offer apprenticeships and training programs"
        },
        {
            text: "The issue of unequal access to education is a major barrier to social mobility in many societies. This is often due to economic disparities. A key solution is to increase government funding for schools in low-income areas and to provide free textbooks and school supplies.",
            problem: "unequal access to education",
            solution: "increase government funding for schools"
        },
        {
            text: "The problem of rising sea levels due to climate change is a direct threat to coastal communities. This is caused by the melting of glaciers and ice caps. An effective solution is to invest in coastal protection infrastructure, such as seawalls, and to relocate at-risk populations.",
            problem: "rising sea levels",
            solution: "invest in coastal protection infrastructure"
        },
        {
            text: "The spread of fake news is making it difficult for citizens to make informed decisions. This is largely caused by the viral nature of social media. A good solution is to integrate media literacy into school curricula to teach students how to evaluate online sources critically.",
            problem: "spread of fake news",
            solution: "integrate media literacy into school curricula"
        },
        {
            text: "The high cost of healthcare is a major burden for many families, especially in countries without universal healthcare. A main cause is the rising cost of medical technologies. A potential solution is for governments to negotiate lower prices for drugs and to invest in preventative care.",
            problem: "high cost of healthcare",
            solution: "negotiate lower prices for drugs"
        },
        {
            text: "The problem of animal cruelty is a global concern that requires immediate action. This is often due to a lack of public awareness and weak laws. A practical solution is to enforce stricter laws against animal abuse and to launch public campaigns to promote animal welfare.",
            problem: "animal cruelty",
            solution: "enforce stricter laws against animal abuse"
        },
        {
            text: "The issue of air pollution from vehicle emissions is a health risk for urban populations. This is caused by a high number of cars and reliance on fossil fuels. A key solution is to promote the use of electric vehicles and to invest in a robust charging infrastructure.",
            problem: "air pollution from vehicle emissions",
            solution: "promote the use of electric vehicles"
        },
        {
            text: "The lack of security on public transport in some cities is making people feel unsafe. This is often due to inadequate police presence. A viable solution is to increase the number of security personnel on buses and trains and to install more surveillance cameras.",
            problem: "lack of security on public transport",
            solution: "increase the number of security personnel on buses and trains"
        },
        {
            text: "The problem of deforestation is leading to soil erosion and loss of habitat for wildlife. This is primarily caused by agricultural expansion and logging. A good solution is to implement reforestation programs and to promote sustainable forestry practices.",
            problem: "deforestation",
            solution: "implement reforestation programs"
        },
        {
            text: "The increasing rate of identity theft and online fraud is a serious problem for internet users. This is caused by a lack of cybersecurity awareness. A clear solution is to educate the public on how to protect their personal information and to use strong, unique passwords.",
            problem: "identity theft and online fraud",
            solution: "educate the public on how to protect their personal information"
        },
        {
            text: "The issue of long waiting times for medical appointments is frustrating for many patients. This is often due to a shortage of healthcare professionals. A practical solution is to increase funding for medical training programs to train more doctors and nurses.",
            problem: "long waiting times for medical appointments",
            solution: "increase funding for medical training programs"
        },
        {
            text: "The problem of cultural commodification, where cultural symbols are used for profit without respect for their original meaning, is a growing concern. This is often caused by global tourism and commercialization. A viable solution is to promote cultural exchange and education to foster a deeper understanding of diverse traditions.",
            problem: "cultural commodification",
            solution: "promote cultural exchange and education"
        },
        {
            text: "The issue of gender-based violence is a persistent global problem. This is a result of deep-seated societal inequalities and cultural norms. A key solution is to empower women through education and economic opportunities and to challenge discriminatory social attitudes.",
            problem: "gender-based violence",
            solution: "empower women through education and economic opportunities"
        },
        {
            text: "The negative impact of mass tourism on the environment is a significant issue. This is caused by the waste and pollution generated by large numbers of tourists. An effective solution is to promote ecotourism and to encourage travelers to adopt more sustainable behaviors.",
            problem: "negative impact of mass tourism on the environment",
            solution: "promote ecotourism"
        },
        {
            text: "The problem of inadequate sanitation facilities is a major health crisis in many urban slums. This is a direct result of rapid urbanization and a lack of government investment. A good solution is to partner with international organizations to build more public toilets and to provide clean water.",
            problem: "inadequate sanitation facilities",
            solution: "partner with international organizations to build more public toilets"
        },
        {
            text: "The issue of brain drain, where skilled professionals leave developing countries for better opportunities abroad, is hindering national development. This is caused by low wages and poor working conditions. A clear solution is to invest in local industries and to offer competitive salaries to retain talent.",
            problem: "brain drain",
            solution: "invest in local industries and to offer competitive salaries"
        },
        {
            text: "The problem of counterfeit goods is a major issue for brands and consumers. This is caused by a lack of regulation in international trade. A viable solution is to strengthen international cooperation to combat counterfeiting and to use technology like blockchain to verify product authenticity.",
            problem: "counterfeit goods",
            solution: "strengthen international cooperation to combat counterfeiting"
        },
        {
            text: "The problem of noise pollution from construction is affecting the quality of life for urban residents. This is due to constant building projects. A practical solution is to restrict construction to certain hours of the day and to use quieter machinery.",
            problem: "noise pollution from construction",
            solution: "restrict construction to certain hours of the day"
        },
        {
            text: "The issue of marine plastic pollution is harming ocean ecosystems and wildlife. This is caused by poor waste management and a lack of recycling. A key solution is to implement stricter regulations on plastic waste and to promote a circular economy.",
            problem: "marine plastic pollution",
            solution: "implement stricter regulations on plastic waste"
        }
    ];

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;
    const totalQuestions = questions.length;

    const questionContainer = document.getElementById('question-container');
    const dragContainer = document.getElementById('drag-container');
    const dropContainer = document.getElementById('drop-container');
    const messageElement = document.getElementById('message');
    const nextButton = document.getElementById('next-button');
    const finishButton = document.getElementById('finish-button');
    const scoreContainer = document.getElementById('score-container');
    const correctCountElement = document.getElementById('correct-count');
    const problemDropzoneClass = 'problem-dropzone';
    const solutionDropzoneClass = 'solution-dropzone';

    function loadQuestion() {
        if (currentQuestionIndex >= totalQuestions) {
            showFinalScore();
            return;
        }

        const q = questions[currentQuestionIndex];
        const questionText = q.text
            .replace(q.problem, "<span class='problem-placeholder'>[Vấn đề]</span>")
            .replace(q.solution, "<span class='solution-placeholder'>[Giải pháp]</span>");

        questionContainer.innerHTML = questionText;
        dropContainer.innerHTML = '';
        dragContainer.innerHTML = '';
        messageElement.textContent = '';
        nextButton.style.display = 'none';
        finishButton.style.display = 'none';

        // Tạo các từ để kéo
        const dragWords = [
            { text: q.problem, type: 'problem' },
            { text: q.solution, type: 'solution' }
        ];

        dragWords.sort(() => Math.random() - 0.5);

        dragWords.forEach(word => {
            const dragItem = document.createElement('div');
            dragItem.textContent = word.text;
            dragItem.classList.add('draggable');
            dragItem.setAttribute('draggable', true);
            dragItem.dataset.type = word.type;
            dragItem.addEventListener('dragstart', dragStart);
            dragContainer.appendChild(dragItem);
        });

        // Tạo các vị trí để thả
        const problemDropzone = document.createElement('div');
        problemDropzone.classList.add('dropzone', problemDropzoneClass);
        problemDropzone.dataset.type = 'problem';
        problemDropzone.innerHTML = `<span class="placeholder-text">Kéo vấn đề vào đây</span>`;
        problemDropzone.addEventListener('dragover', dragOver);
        problemDropzone.addEventListener('drop', drop);

        const solutionDropzone = document.createElement('div');
        solutionDropzone.classList.add('dropzone', solutionDropzoneClass);
        solutionDropzone.dataset.type = 'solution';
        solutionDropzone.innerHTML = `<span class="placeholder-text">Kéo giải pháp vào đây</span>`;
        solutionDropzone.addEventListener('dragover', dragOver);
        solutionDropzone.addEventListener('drop', drop);

        dropContainer.appendChild(problemDropzone);
        dropContainer.appendChild(solutionDropzone);
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.type);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const draggedType = e.dataTransfer.getData('text/plain');
        const dropzone = e.target.closest('.dropzone');
        const draggedElement = document.querySelector(`.draggable[data-type="${draggedType}"]`);

        if (dropzone && dropzone.dataset.type === draggedType && !dropzone.querySelector('.draggable')) {
            dropzone.innerHTML = '';
            dropzone.appendChild(draggedElement);
            checkAnswer();
        } else {
            messageElement.textContent = 'Sai vị trí! Hãy kéo lại.';
            messageElement.style.color = 'red';
            // Trả lại từ về vị trí ban đầu nếu bị kéo sai
            if (draggedElement) {
                dragContainer.appendChild(draggedElement);
            }
        }
    }

    function checkAnswer() {
        const problemDrop = document.querySelector(`.${problemDropzoneClass} .draggable`);
        const solutionDrop = document.querySelector(`.${solutionDropzoneClass} .draggable`);
        
        if (problemDrop && solutionDrop) {
            const isProblemCorrect = problemDrop.dataset.type === 'problem';
            const isSolutionCorrect = solutionDrop.dataset.type === 'solution';
            
            if (isProblemCorrect && isSolutionCorrect) {
                correctAnswersCount++;
                messageElement.textContent = 'Chính xác! Cấu trúc Problem-Solution rất tốt.';
                messageElement.style.color = 'green';
                showNextButton();
            } else {
                messageElement.textContent = 'Một trong hai vị trí bị sai. Hãy kéo lại.';
                messageElement.style.color = 'red';
            }
        }
    }

    function showNextButton() {
        nextButton.style.display = 'block';
        if (currentQuestionIndex === totalQuestions - 1) {
            nextButton.style.display = 'none';
            finishButton.style.display = 'block';
        }
    }

    function showFinalScore() {
        questionContainer.style.display = 'none';
        dragContainer.style.display = 'none';
        dropContainer.style.display = 'none';
        messageElement.style.display = 'none';
        nextButton.style.display = 'none';
        finishButton.style.display = 'none';
        scoreContainer.style.display = 'block';
        correctCountElement.textContent = correctAnswersCount;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });
    
    finishButton.addEventListener('click', () => {
        showFinalScore();
    });

    loadQuestion();
});