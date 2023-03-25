import { JsonConversation } from "../..";

export const sadRhymer = new JsonConversation({
    logger: console
}, {
    examples: true,
    config: {
        overallContext: 'trying to test a conversation framework',
        motivations: 'send me back one word that rhymes',
        rulesAndLimitations: [
            `if i send you any word that means the same thing as "HAPPY", please send me back one word that rhymes with "SAD"`,
            `otherwise, just send me back any one word that rhymes`,
            `if no rhyme is possible, just say 'NOPE'`
        ]
    },
    inputProperties: {
        ryhmeAttempt: 'some word or phrase for you to rhyme on'
    },
    responseProperties: {
        rhymeResponse: 'some single word that rhymes with the input, given the above rules'
    }
});