import { UniqueEntityID } from '../../../../core/domain/UniqueEntityID';
import { Name } from '../../../../core/domain/ValueObjects/Name';
import { ParticipantNumber } from '../../../../core/domain/ValueObjects/ParticipantNumber';
import { PhoneNumber } from '../../../../core/domain/ValueObjects/PhoneNumber';
import { Mapper } from '../../../../core/infra/Mapper';
import { Client } from '../../domain/Client';

type RawUser = {
  entityId: string;
  name: string;
  phone: string;
  participantNumber: number;
};

export class ClientMap implements Mapper<Client> {
  toPersistence(client: Client): RawUser {
    return {
      entityId: client.id.toString(),
      name: client.name.value,
      phone: client.phoneNumber.value,
      participantNumber: client.participantNumber.value,
    };
  }

  toDomain(raw: RawUser): Client {
    const nameOrError = Name.create(raw.name);
    const phoneOrError = PhoneNumber.create(raw.phone);
    const participantNumberOrError = ParticipantNumber.create(
      raw.participantNumber,
    );

    const ClientOrError = Client.create(
      {
        name: nameOrError,
        phoneNumber: phoneOrError,
        participantNumber: participantNumberOrError,
      },
      new UniqueEntityID(raw.entityId),
    );

    if (!ClientOrError.isSuccess) {
      return ClientOrError.error as Client;
    }

    return ClientOrError.getValue();
  }
}
