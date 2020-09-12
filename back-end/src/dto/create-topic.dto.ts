export class CreateTopicDto {
    readonly topicId: string;
    readonly topicName: string;
    readonly description: string;
    readonly active: boolean;
}