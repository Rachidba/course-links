import Resource from '../entities/Resource';
import { validate, ValidationError } from 'class-validator';

class ResourceController {
  static mapAndValidateResources = async (
    resources: any[],
  ): Promise<ValidationError[] | Resource[]> => {
    const mappedResources = ResourceController.mapResources(resources);
    const errors = await ResourceController.validateResources(mappedResources);
    if (errors.length > 0) {
      return errors;
    }
    return mappedResources;
  };
  private static mapResources = (resources: any[]): Resource[] => {
    return resources.map((resource) => {
      const { title, description, link, order } = resource;
      const newResource = new Resource();
      newResource.title = title;
      newResource.description = description;
      newResource.link = link;
      newResource.order = order;
      return newResource;
    });
  };
  private static validateResources = async (
    resources: Resource[],
  ): Promise<ValidationError[]> => {
    for (let i = 0; i < resources.length; i++) {
      const resource = resources[i];
      const errors = await validate(resource);
      if (errors.length > 0) return errors;
    }
    return [];
  };
}
export default ResourceController;
