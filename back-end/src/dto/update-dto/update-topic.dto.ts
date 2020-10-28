export class UpdateTopicDto {
    readonly topicId: string;
    readonly topicName: string;
    readonly description: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}