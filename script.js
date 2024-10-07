let btn = document.querySelector ('#new-quote');
let quote = document.querySelector ('.quote');
let person = document.querySelector ('.person');

const quotes  = 


    [
        {
            "quote": "Be yourself; everyone else is already taken.",
            "person": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Inspirational",
                "Advice",
                "Humor"
            ]
        },
        {
            "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
            "person": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "Humor"
            ]
        },
        {
            "quote": "True friends stab you in the front.",
            "person": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "People"
            ]
        },
        {
            "quote": "Women are made to be Loved, not understood.",
            "person": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "Humor"
            ]
        },
        {
            "quote": "Be the change that you wish to see in the world.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Philosophy",
                "Advice"
            ]
        },
        {
            "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Life",
                "Advice"
            ]
        },
        {
            "quote": "No one can make you feel inferior without your consent.",
            "person": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom"
            ]
        },
        {
            "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
            "person": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom",
                "People"
            ]
        },
        {
            "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
            "person": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom",
                "Advice"
            ]
        },
        {
            "quote": "Do one thing every day that scares you.",
            "person": "Eleanor Roosevelt",
            "profession": "Former First Lady of the United States",
            "topics": [
                "Wisdom",
                "Life"
            ]
        },
        {
            "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
            "person": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Love"
            ]
        },
        {
            "quote": "Our lives begin to end the day we become silent about things that matter.",
            "person": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Life"
            ]
        },
        {
            "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            "person": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "People",
                "Life"
            ]
        },
        {
            "quote": "Injustice anywhere is a threat to justice everywhere.",
            "person": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Wisdom"
            ]
        },
        {
            "quote": "The time is always right to do what is right.",
            "person": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
            "person": "Martin Luther King",
            "profession": "American minister",
            "topics": [
                "Inspirational",
                "Life",
                "People"
            ]
        },
        {
            "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
            "person": "Albert Einstein",
            "profession": "Theoretical physicist",
            "topics": [
                "Inspirational",
                "Life"
            ]
        },
        {
            "quote": "I have not failed. I've just found 10,000 ways that won't work.",
            "person": "Thomas A. Edison",
            "profession": "American inventor",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "person": "Thomas A. Edison",
            "profession": "American inventor",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
            "person": "Thomas A. Edison",
            "profession": "American inventor",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },
        {
            "quote": "If we did all the things we are capable of, we would literally astound ourselves.",
            "person": "Thomas A. Edison",
            "profession": "American inventor",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
            "person": "Albert Einstein",
            "profession": "Theoretical physicist",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Life isn't about finding yourself. Life is about creating yourself.",
            "person": "George Bernard Shaw",
            "profession": "Irish playwright",
            "topics": [
                "Inspirational",
                "Life",
                "Advice"
            ]
        },
        {
            "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "person": "Winston Churchill",
            "profession": "Former British Prime Minister",
            "topics": [
                "Inspirational",
                "Life",
                "Advice"
            ]
        },
        {
            "quote": "If you're going through hell, keep going.",
            "person": "Winston Churchill",
            "profession": "Former British Prime Minister",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },
        {
            "quote": "We make a living by what we get, but we make a life by what we give.",
            "person": "Winston Churchill",
            "profession": "Former British Prime Minister",
            "topics": [
                "People",
                "Life"
            ]
        },
        {
            "quote": "Peace begins with a smile.",
            "person": "Mother Teresa",
            "profession": "Roman Catholic Saint",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            "person": "Mother Teresa",
            "profession": "Roman Catholic Saint",
            "topics": [
                "Inspirational",
                "Love",
                "Advice"
            ]
        },
        {
            "quote": "If you can't feed a hundred people, then feed just one.",
            "person": "Mother Teresa",
            "profession": "Roman Catholic Saint",
            "topics": [
                "Inspirational",
                "Advice",
                "People"
            ]
        },
        {
            "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
            "person": "Mother Teresa",
            "profession": "Roman Catholic Saint",
            "topics": [
                "Inspirational",
                "People"
            ]
        },
        {
            "quote": "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
            "person": "L.M. Montgomery",
            "profession": "Canadian author",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "Tomorrow is always fresh, with no mistakes in it.",
            "person": "L.M. Montgomery",
            "profession": "Canadian author",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
            "person": "L.M. Montgomery",
            "profession": "Canadian author",
            "topics": [
                "Inspirational",
                "Advice",
                "Life"
            ]
        },
        {
            "quote": "It's so easy to be wicked without knowing it, isn't it?",
            "person": "L.M. Montgomery",
            "profession": "Canadian author",
            "topics": [
                "Inspirational",
                "Philosophy",
                "Life"
            ]
        },
        {
            "quote": "All the darkness in the world cannot extinguish the light of a single candle.",
            "person": "Francis of Assisi",
            "profession": "Italian Catholic Saint",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
            "person": "Francis of Assisi",
            "profession": "Italian Catholic Saint",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Preach the Gospel at all times and when necessary use words.",
            "person": "Francis of Assisi",
            "profession": "Italian Catholic Saint",
            "topics": [
                "Religion",
                "Wisdom"
            ]
        },
        {
            "quote": "A single sunbeam is enough to drive away many shadows.",
            "person": "Francis of Assisi",
            "profession": "Italian Catholic Saint",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "You never fail until you stop trying.",
            "person": "Albert Einstein",
            "profession": "Theoretical physicist",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },
        {
            "quote": "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
            "person": "George Bernard Shaw",
            "profession": "Irish playwright",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
            "person": "George Bernard Shaw",
            "profession": "Irish playwright",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
            "person": "George Bernard Shaw",
            "profession": "Irish playwright",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
            "person": "George Bernard Shaw",
            "profession": "Irish playwright",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "Kindness is a language which the deaf can hear and the blind can see.",
            "person": "Mark Twain",
            "profession": "American writer",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "The secret of getting ahead is getting started.",
            "person": "Mark Twain",
            "profession": "American writer",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },
        {
            "quote": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
            "person": "Mark Twain",
            "profession": "American writer",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },
        {
            "quote": "The two most important days in your life are the day you are born and the day you find out why.",
            "person": "Mark Twain",
            "profession": "American writer",
            "topics": [
                "Inspirational",
                "Life"
            ]
        },
        {
            "quote": "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
            "person": "Mark Twain",
            "profession": "American writer",
            "topics": [
                "Inspirational",
                "Life"
            ]
        },
        {
            "quote": "If you tell the truth, you don't have to remember anything.",
            "person": "Mark Twain",
            "profession": "American writer",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "I have never met a man so ignorant that I couldn't learn something from him",
            "person": "Galileo Galilei",
            "profession": "Italian Polymath",
            "topics": [
                "Inspirational"
            ]
        },
        {
            "quote": "Earth provides enough to satisfy every man's needs, but not every man's greed.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Where there is love there is life.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Life",
                "Love"
            ]
        },
        {
            "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Philosophy"
            ]
        },
        {
            "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Philosophy"
            ]
        },
        {
            "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Philosophy"
            ]
        },
        {
            "quote": "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Philosophy"
            ]
        },
        {
            "quote": "In a gentle way, you can shake the world.",
            "person": "Mahatma Gandhi",
            "profession": "Indian leader",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Philosophy"
            ]
        },
        {
            "quote": "He that can have patience can have what he will.",
            "person": "Benjamin Franklin",
            "profession": "Founding Father of the United States",
            "topics": [
                "Inspirational",
                "Wisdom"
            ]
        },
        {
            "quote": "Either write something worth reading or do something worth writing.",
            "person": "Benjamin Franklin",
            "profession": "Founding Father of the United States",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },
        {
            "quote": "Tell me and I forget, teach me and I may remember, involve me and I learn.",
            "person": "Benjamin Franklin",
            "profession": "Founding Father of the United States",
            "topics": [
                "Inspirational",
                "Wisdom",
                "Philosophy"
            ]
        },
        {
            "quote": "Never ruin an apology with an excuse.",
            "person": "Benjamin Franklin",
            "profession": "Founding Father of the United States",
            "topics": [
                "Life",
                "Advice"
            ]
        },
        {
            "quote": "Early to bed and early to rise makes a man healthy, wealthy and wise.",
            "person": "Benjamin Franklin",
            "profession": "Founding Father of the United States",
            "topics": [
                "Life",
                "Advice"
            ]
        },
        {
            "quote": "By failing to prepare, you are preparing to fail.",
            "person": "Benjamin Franklin",
            "profession": "Founding Father of the United States",
            "topics": [
                "Inspirational",
                "Advice"
            ]
        },
        {
            "quote": "Those who look for the bad in people will surely find it.",
            "person": "Abraham Lincoln",
            "profession": "16th U.S. President",
            "topics": [
                "Inspirational",
                "People"
            ]

}]


btn.addEventListener ('click',function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})